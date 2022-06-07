import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.component.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';
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
export class AuthenticationComponent implements OnInit {
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
  private _authService:AuthenticationService
    ) {
      this.createForm();
     }

  ngOnInit(): void {
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
        
        sessionStorage.setItem('user',data['data'][0]);
        this.router.navigate(['/dashboard'])
      },
      error:(err)=>{                
        this.openSnackBar('Ocurrio un error al intentar iniciar session');
      },
      complete:()=>{        
        this.switchLoading();
      }
    }) : 
    this.openSnackBar('Debe completar los datos sin errores');
    this.markIsInvalid('pasword','warn');
    this.markIsInvalid('username','warn');
    this.formG.markAllAsTouched();
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
