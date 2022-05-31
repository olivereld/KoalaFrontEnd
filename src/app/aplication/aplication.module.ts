import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicationRoutingModule } from './aplication.routing';
import {MatDialogModule} from '@angular/material/dialog'; 
@NgModule({
  declarations: [],
  imports: [ CommonModule,AplicationRoutingModule,MatDialogModule ],
  exports: [],
  providers: [],
})
export class AplicationModule {}