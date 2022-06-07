import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../aplication/users/users.component';
import { EditComponent } from '../aplication/components/edit/edit.component';

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
