import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api=environment.API_URL;
  constructor(private _http:HttpClient) { }

  getByParameter(parameter:any){
    
  }
  getAllUsers(){
    return this._http.get(`${this.api}user/`).pipe(
      map( (element:any) => {
        return element['data'];
      })
    );
  }

  getUser(id:string){
    return this._http.get(`${this.api}user/${id}`);
  }

  updateUser(id:string,changes:any){
    return this._http.put(`${this.api}user/`,changes);    
  }
  createUser(user:any){
    
    return this._http.post(`${this.api}user/`,user);
  }

  uploadImage(file:FormData,userId:string){
    
    const options = {
      headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data',          
      })
  }
    console.log(file);
    return this._http.post(`${this.api}upload/${userId}`,file);
  }

  deleteUser(id:string){
    return this._http.delete(`${this.api}user/${id}`);
  }
}
