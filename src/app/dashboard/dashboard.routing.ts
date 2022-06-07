import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../aplication/users/users.component';

const routes: Routes = [
  
  { 
    path: '', 
    component: DashboardComponent , 
    children:[
      { path: '', component: UsersComponent },      
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
