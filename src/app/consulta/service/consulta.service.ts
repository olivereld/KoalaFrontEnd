import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private env = environment;
  constructor(private _client:HttpClient){}

  GetEmployer()    {}
  PostEmployer()   {}
  DeleteEmployer() {}
  UpdateEmployer() {}
}