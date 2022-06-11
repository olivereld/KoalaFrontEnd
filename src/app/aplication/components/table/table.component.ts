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
 
  constructor(private userService:UsersService,private router:Router) { }
  ngAfterViewInit() {    
  }
  ngOnInit(): void {
    this.fillTable(true);
  }

  fillTable(isFirstTime:boolean){
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
    this.actualPage = parseInt(paginationInfo.actualPages);
    this.paginatorInfo['pageSize']  =  parseInt(paginationInfo.totalPages);
  }
  handlePageEvent(event: PageEvent){    
    this.actualPage = event.pageIndex+1;
    this.limit      = event.pageSize;
    this.fillTable(false);
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe(
      {
        next:(resp)=>{
          console.log(resp);
        },
        error:(err)=>{
          console.log('no pudo eliminar');
        },
        complete:()=>{
          this.fillTable(true);
        },
      }
    )
  }

  checkDetail(id:string){
    this.router.navigate([`/${id}`]);
  }

  editUserNow(user:any){
    this.editUser.emit(user)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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

