import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
    selector: 'table-preview-modal',
    templateUrl: 'table-preview.modal.html',
  })
  export class TablePreviewModal {
    constructor(
      public dialogRef: MatDialogRef<TablePreviewModal>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}