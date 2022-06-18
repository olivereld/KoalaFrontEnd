import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {  
  userDataPreview:any;
  host = environment.HOST;
  constructor(
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data_in:any,
  ) { }
  

  ngOnInit(): void {
    console.log(this.data_in['user'])
    this.userDataPreview = this.data_in['user'];
  }

  close(){
    this.dialogRef.close();
  }

}
