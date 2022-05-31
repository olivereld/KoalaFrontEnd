import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TablePreviewModal } from '../modals/table-preview/table-preview.modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  animal: string = 'pablo';
  name: string = 'Javier';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TablePreviewModal, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
