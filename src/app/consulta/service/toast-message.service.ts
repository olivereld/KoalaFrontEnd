import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  constructor(private toastr:ToastrService){}

  showSucces(message:string){
    this.toastr.success(message);
  }
  
  showWarning(message:string){
    this.toastr.warning(message);
  }
  
  showerror(message:string){
    this.toastr.error(message);
  }

  showInfo(message:string){
    this.toastr.info(message);
  }
}