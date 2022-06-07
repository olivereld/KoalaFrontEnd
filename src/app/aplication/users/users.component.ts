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
  isLoading = false;
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
  }

}
