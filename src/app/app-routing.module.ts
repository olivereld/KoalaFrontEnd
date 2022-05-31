import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './aplication/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//o0L0i0v0e0r
const routes: Routes = [
  { 
    path: '',
    component:DashboardComponent, 
    loadChildren: () => import('./aplication/aplication.module').then(m => m.AplicationModule)    
  },  
  {
    path:':id',
    loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule)    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 