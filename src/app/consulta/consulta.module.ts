import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsultaRouting } from './consulta.routing';
import {MatIconModule} from '@angular/material/icon';
import { ConsultaComponent } from './consulta.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    SharedModule,
    
    RouterModule.forChild(ConsultaRouting),
  ],
  exports:[ConsultaComponent]
})
export class ConsultaModule { }
