import { Routes } from '@angular/router';
import { ConsultaComponent } from './consulta.component';
export const ConsultaRouting: Routes = [
  {
    path: '',
    children: [     
          
      {
        path: '',
        component: ConsultaComponent
      },      
    ]
  }
];