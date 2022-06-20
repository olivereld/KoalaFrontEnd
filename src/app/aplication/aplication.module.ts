import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicationRoutingModule } from './aplication.routing';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './components/edit/edit.component';
import { TableComponent } from './components/table/table.component';

import { FullnamePipe } from '../pipes/fullname.pipe';

import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';

import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule} from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CarnetComponent } from './components/carnet/carnet.component';
import { CarnetDialogComponent } from './components/carnet-dialog/carnet-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableResponsiveDirective } from '../directives/mat-table-responsive.directive';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';
import { ConfirmModal } from './modals/confirm/confirm.modal';

@NgModule({
  declarations: [
    UsersComponent, 
    TableComponent,
    EditComponent,
    FullnamePipe,
    RegisterComponent,
    CarnetComponent,
    CarnetDialogComponent,
    MatTableResponsiveDirective,
    DetailsDialogComponent,
    ConfirmModal],
  imports: [ 
    CommonModule,
    AplicationRoutingModule,
    ImageCropperModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatButtonModule,
    
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
    SharedModule

  ],
  exports: [MatTableResponsiveDirective],
  providers: [],
  bootstrap:[TableComponent]
})
export class AplicationModule {}