import {AfterViewInit, Component, ViewChild,OnInit, Output,EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['fullname', 'work', 'phone','acciones'];
  dataSource:any;
  @Output() editUser = new EventEmitter();
  isLoaded=false;
  userData:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 
  constructor(private userService:UsersService,private router:Router) { }
  ngAfterViewInit() {    
  }
  ngOnInit(): void {
    this.fillTable();
  }

  fillTable(){
    this.userService.getAllUsers().subscribe(
      {
        next:(data:any)=>{
          const dataTable = [...data];
          for (let item of dataTable) {item['acciones'] = ''};
          console.log(dataTable);
          this.dataSource = new MatTableDataSource<User>(dataTable);
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
          this.fillTable();
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

