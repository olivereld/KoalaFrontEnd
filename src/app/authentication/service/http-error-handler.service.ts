import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private toastr:ToastrService) { }

  loginErrorManager(code:number) {
    try{
      console.log(code);
      if(code < 500 && code > 0){
        this.toastr.error('Credenciales invalidas','Error al autenticar');
      }else{
        this.toastr.error('Se perdio la conexion con el Servidor','Conexion Perdida')
      }
    }catch(err){
      console.log(err);
    }
    
  }
  
  loginErrorEmpyForm(){
    this.toastr.warning('Debe llenar todos los campos para acceder','Atencion')
  }

}
