import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api=environment.API_PUBLIC;
  constructor(private _http:HttpClient){}
  
  login(data:any){
    return this._http.post(`${this.api}sing-in/`,data);
  }
  
  logOut(){
  
  }
}