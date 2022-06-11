import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private toastr:ToastrService) { }

  loginErrorManager(code:number) {
    console.log(code);
    if(code < 500){
      this.toastr.error('Credenciales invalidas','Error al autenticar');
    }else{
      this.toastr.error('Error al iniciar session','Error')
    }
  }
  
  loginErrorEmpyForm(){
    this.toastr.warning('Debe llenar todos los campos para acceder','Atencion')
  }

}
