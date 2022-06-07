import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//o0L0i0v0e0r
const routes: Routes = [
  { 
    path: '',    
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)    
  },  
  { 
    path: 'dashboard',    
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)    
  },  
  {
    path:':id',
    loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule)    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 