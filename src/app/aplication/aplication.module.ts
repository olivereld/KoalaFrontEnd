import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicationRoutingModule } from './aplication.routing';
import {MatDialogModule} from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';

import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../shared/shared.module';
import { FullnamePipe } from '../pipes/fullname.pipe';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    UsersComponent, 
    TableComponent,
    FullnamePipe,
    RegisterComponent],
  imports: [ 
    CommonModule,
    AplicationRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
    SharedModule

  ],
  exports: [],
  providers: [],
})
export class AplicationModule {}