import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ConfirmData {
  message: string;
  btn_1  : string;
  btn_2  : string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',  
  styleUrls:['./confirm.component.scss']
})
export class ConfirmModal implements OnInit {
  messageBody = {
    message:'Desea eliminar',
    btn_1:'Si',
    btn_2:'No'
  }
  user:any;
  constructor(
    public dialogRef: MatDialogRef<ConfirmModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.messageBody = data['message'];
    this.user = data['user'];
    console.log(this.user)
  }

  delete(){
    this.dialogRef.close(true);
  }
  close(){
    this.dialogRef.close(false);
  }

  ngOnInit(): void { }
}
