import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DashboardRoutingModule } from './dashboard.routing';
import { MatExpansionModule } from '@angular/material/expansion';
import { AplicationModule } from '../aplication/aplication.module';


@NgModule({
  declarations: [DashboardComponent,],
  imports: [ 
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    DashboardRoutingModule,
    AplicationModule,
    
  ],
  exports: [],
  providers: [],
})
export class DashboardModule {}