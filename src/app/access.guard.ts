import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({providedIn: 'root'})
export class AccessGuard implements CanActivate {
  constructor(private routing:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const session:any = sessionStorage.getItem('user');
    if(session ){
      const user:any = JSON.parse(atob(( (session) )));    
      if(user.role == 'admin'){
        return true;
      }else{
        this.routing.navigate(['/login'])
        return false;
      }
    }else{
      this.routing.navigate(['/login'])
      return false;
    }
    
  }
}