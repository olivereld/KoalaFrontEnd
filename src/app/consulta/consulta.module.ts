import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsultaRouting } from './consulta.routing';
import {MatIconModule} from '@angular/material/icon';
import { ConsultaComponent } from './consulta.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatRippleModule } from '@angular/material/core';
import { NgxVcardModule } from "ngx-vcard";

import { ConsultDialogComponent } from './dialog/consult-dialog';
import { MatDialogModule} from '@angular/material/dialog';
import { MatList, MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [ConsultaComponent,ConsultDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    NgxVcardModule,
    MatDialogModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule.forChild(ConsultaRouting),
  ],
  exports:[ConsultaComponent]
})
export class ConsultaModule { }
