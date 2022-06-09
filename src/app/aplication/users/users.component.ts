import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TablePreviewModal } from '../modals/table-preview/table-preview.modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  isRegister = false;
  isEdit = false;
  isLoading = false;
  userData:any = {
    fullname:'oliver Grillet',
    img:'',
    work:'Programador',
    phone:'12412341231',
    email:'olivereldd@gmail.com',
    web:'https://koala.com',


  };
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    
  }

  switchLoading(){
    this.isLoading = !this.isLoading;
  }

  goBack(){
    this.isRegister = false;
    this.isEdit = false;
  }

  seteditionUser(event:any){
    this.userData = event;
    this.isEdit = true;
  }

}
