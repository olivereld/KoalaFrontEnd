import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/aplication/modals/table-preview/table-preview.modal';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-consult-dialog',
  template: `
  <h1 mat-dialog-title>Compartir</h1>
<div mat-dialog-content>
  <mat-selection-list #shoes [multiple]="false">
    <mat-list-option [value]="0">
      Facebook
    </mat-list-option>
    <mat-list-option [value]="0">
      Whatsapp
    </mat-list-option>
    <mat-list-option [value]="0">
      Telegram
    </mat-list-option>
    <mat-list-option [value]="0">
      Gmail
    </mat-list-option>
  </mat-selection-list>
</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</div>`,
  styles:[` `]
})
export class ConsultDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConsultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData | any,
    ) {}

  ngOnInit(): void { 
    
    console.log(environment.HOST,this.data['url']['params']['id']);
  }
}
