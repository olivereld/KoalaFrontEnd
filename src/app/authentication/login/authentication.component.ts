import { Component, OnInit,AfterViewChecked } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.component.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { bounceIn } from 'ng-animate';
import { timer } from 'rxjs';
import { HttpErrorHandlerService } from '../service/http-error-handler.service';
enum Colors {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'  
}

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations:[
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))])
  ]
})
export class AuthenticationComponent implements OnInit,AfterViewChecked {
  bounceIn: any;
  loading:boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  formG:FormGroup = this._formB.group({});
  colorInputMark:any = {
    username:Colors.primary,
    password:Colors.primary
  }
  constructor(
  private _formB:FormBuilder,
  private _snackBar: MatSnackBar,
  private router:Router,
  private _authService:AuthenticationService,
  private toastr:ToastrService,
  private errorHandler:HttpErrorHandlerService
    ) {
      this.createForm();
     }

  ngOnInit(): void {
    sessionStorage.removeItem('user');

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }
  
  createForm(){
    this.formG = this._formB.group(
      {
        username:['',[Validators.required,Validators.min(4)]],
        password:['',[Validators.required,Validators.min(4)]]
      }
    )
  }

  validateFormKey(key:string):boolean{    
    return this.formG.get(key)?.valid ? true : false;
  }
  validateForm():boolean{
    return (this.validateFormKey('username') && this.validateFormKey('password'))
  }

  markIsInvalid(key:string,color:string){
    this.colorInputMark[key] = color;
  }
  
  onLogin(){
    this.switchLoading();
    this.validateForm() ? this._authService.login(this.formG.value).subscribe({
      next:(data:any)=>{          
        sessionStorage.setItem('user',btoa(JSON.stringify(data['data'][0])));
        this.router.navigate(['/dashboard'])
      },
      error:(err)=>{     
        this.switchLoading(); 
        this.errorHandler.loginErrorManager(err.status);          
      },
        complete:()=>{    
          this.switchLoading();
        }    
      }):this.invalidForm();                     
    }
    
    invalidForm(){
      this.errorHandler.loginErrorEmpyForm()
      this.formG.markAllAsTouched();       
      this.markIsInvalid('pasword','warn');
      this.markIsInvalid('username','warn');
      this.switchLoading();
  }

  openSnackBar(mensaje:string) {
    this._snackBar.open(mensaje, 'cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  switchLoading(){    
    this.loading = this.loading?false:true;
  }

}
