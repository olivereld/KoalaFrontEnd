import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './login/authentication.component';

const routes: Routes = [

  { path: '', component: AuthenticationComponent },
  //{ path: 'path2', component: Name2Component },
  //{ path: 'path3', component: Name3Component },
  //{ path: 'path4', component: Name4Component },
  //{ path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
