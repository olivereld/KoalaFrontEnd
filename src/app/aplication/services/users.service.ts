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

  getByParameter(params:any){    
    return this._http.get(`${this.api}user/`,{params}).pipe(
      map( (element:any) => {
        return element['data'];
      })
    );
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
    return this._http.put(`${this.api}user/${id}`,changes);    
  }

  createUser(user:any){    
    return this._http.post(`${this.api}user/`,user);
  }

  uploadImageApi(image64:any,name:string){
    const options = {
      headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data',          
      })
    }
    return this._http.post(`https://api.imgbb.com/1/upload?key=${environment.IMGBB.KEY}&name=${name}`,image64);        
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

  updateImage(userId:string,imgJson:any){
    return this._http.put(`${this.api}image/${userId}`,{img:JSON.stringify(imgJson)});
  }

  deleteUser(id:string){
    return this._http.delete(`${this.api}user/${id}`);
  }

  async getBase64(file:any) {    
    
      
    
 }
}
