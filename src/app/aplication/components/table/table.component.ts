import {AfterViewInit, Component, ViewChild,OnInit, Output,EventEmitter} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { DATADUMMY } from './dataDummy';
import { HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CarnetDialogComponent } from '../carnet-dialog/carnet-dialog.component';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { ConfirmModal } from '../../modals/confirm/confirm.modal';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['fullname', 'work', 'phone','email','acciones'];
  dataSource:any ;//= DATADUMMY;
  @Output() editUser = new EventEmitter();
  isLoaded=false; //TODO cambiar a false al llamar la subscripcion
  userData:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  actualPage = 1;
  limit = 5;
  
  totalElements = 0;
  paginatorInfo = {
    length:0,
    pageIndex:0,
    pageSize:0
  };
 
  constructor(
    private userService:UsersService,
    private router:Router,
    public dialog: MatDialog,) { }
  ngAfterViewInit() {    
  }
  ngOnInit(): void {
    this.fillTable(true);
  }

  fillTable(isFirstTime:boolean){

    if(localStorage.getItem('paginationSize') ){
      let storage:any = localStorage.getItem('paginationSize')
      this.limit = JSON.parse(storage)['limit'];
      //this.actualPage = JSON.parse(storage)['page'];
    }

    let parameters:HttpParams = new HttpParams()
    .set('page', this.actualPage)
    .set('limit', this.limit);  
    this.userService.getByParameter(parameters).subscribe(
      {
        next:(data:any)=>{

          if(isFirstTime == true){
            this.setPaginator( data['totalCount'][0]);          
          }

          const dataTable = [...data['totalData']];
          for (let item of dataTable) {item['acciones'] = ''};          
          this.dataSource = new MatTableDataSource<User>(dataTable);

          if(isFirstTime == true)
          this.dataSource.paginator = this.paginator;

          
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          this.isLoaded = true;
        }
      }   
    )
  }
  setPaginator(paginationInfo:any){
    this.totalElements = parseInt(paginationInfo.count);
    this.actualPage    = parseInt(paginationInfo.actualPages);
    this.paginatorInfo['pageSize']  =  parseInt(paginationInfo.totalPages);
  }
  
  handlePageEvent(event: PageEvent){  
    this.actualPage = event.pageIndex+1;
    this.limit      = event.pageSize;
    localStorage.setItem('paginationSize',JSON.stringify({page:this.actualPage,limit:this.limit}))
    this.fillTable(false);
  }

  deleteUser(id:string,user:any){

    const confirm = this.dialog.open( ConfirmModal,
      {
        width: '550px', 
        height:'auto',
        data:{
          message:{
            message:`Esta seguro que desea eliminar a ${user.fullname}`,
            btn_1:"Eliminar",
            btn_2:"Cancelar" 
          },
          user:user          
        }            
      })
      confirm.afterClosed().subscribe(result => {
        if(result){
          this.isLoaded = false;
          this.userService.deleteUser(id).subscribe(
            {
              next:(resp)=>{
                this.isLoaded = true;
                console.log(resp);
              },
              error:(err)=>{
                this.isLoaded = true;
                console.log('no pudo eliminar');
              },
              complete:()=>{
                this.isLoaded = true;
                this.fillTable(true);
              },
            }
          )
        }        
      });


    /**
     * 
     */
  }

  checkDetail(element:any){
    this.dialog.open( DetailsDialogComponent,
      {
        width: '550px', 
        height:'auto',
        data:{
          user:element
        }            
      })        
  }

  editUserNow(user:any){
    this.editUser.emit(user)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue.length > 0){
      let parameters:HttpParams = new HttpParams()
      .set('page', '1')
      .set('limit', '500');
      this.userService.getByParameter(parameters).subscribe(
        response=>{                    
          const dataTable = [...response['totalData']
            .filter( (filt:any) => 
              filt['fullname'].includes(filterValue) ||
              filt['phone'].includes(filterValue) ||
              filt['work'].includes(filterValue) ||
              filt['email'].includes(filterValue)
            )
          ];                    
          for (let item of dataTable) {item['acciones'] = ''};  
          this.dataSource = new MatTableDataSource<User>(dataTable);      
          this.dataSource.filter = filterValue.trim().toLowerCase();          
        }
      )
    }else{
      this.actualPage = 1;
      this.limit = 5;
      this.totalElements = 0;
      this.paginatorInfo = {
        length:0,
        pageIndex:0,
        pageSize:0
      };
      this.fillTable(true);
    }    
  }
  
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  openCarnetQr(element:User){
    console.log('User',element);
    this.dialog.open( CarnetDialogComponent,
      {
        width: '550px',  
        data:{
          element
        }            
      })
  }
  
}


export interface User {
        _id      : string
        username : string,
        email    : string,
        fullname : string,
        work     : string,

        direction: string,
        password : string,
        phone    : string,
        role     : string,
        img      : string,
        acciones : string
}

