import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessageService } from 'src/app/consulta/service/toast-message.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  instagram = 'https://www.instagram.com/koala.vzla/';
  website   = 'https://koalaandina.com/';
  isAdmin = false;
  title = 'dropzone';  
  files: File[] = [];
  formG:FormGroup = this._formB.group({});
  @Output() loading = new EventEmitter();
  @Output() goBack = new EventEmitter();

  constructor(
    private _formB:FormBuilder,
    private _userService:UsersService,
    private _toast:ToastMessageService
    ) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm(){
    this.formG = this._formB.group(
      {
        username: ['',[Validators.min(4)]],
        password: ['',[Validators.min(4)]],
        fullname: ['',[Validators.required,Validators.min(4)]],
        lastname: ['',[Validators.required,Validators.min(4)]],
        email:    ['',[Validators.required,Validators.min(4)]],        
        phone:    ['',[Validators.required, Validators.min(4)]],
        work:     ['',[Validators.required,Validators.min(4)]],
        role:     ['',[Validators.min(4)]],
        linkedin: ['',[Validators.min(4)]],        
        img:      ['',[Validators.min(4)]],
      },
    )
  }
  onSave(){
    if(this.formG.valid && this.files.length > 0){
      this.loading.emit();
      let userData = {        
        email     :this.formG.get('email')?.value,
        fullname  :`${this.formG.get('fullname')?.value} ${this.formG.get('lastname')?.value}`,
        work      :this.formG.get('work')?.value,                
        phone     :this.formG.get('phone')?.value,
        linkedin  :this.formG.get('linkedin')?.value,
        instagram :this.instagram,
        username  :null,
        password  :null,
        web       :this.website,
        role      :this.isAdmin?'admin':'user',
        img       :this.formG.get('img')?.value,
      }

      if(this.formG.get('username')?.value.length > 0){
        userData['username'] = this.formG.get('username')?.value;
        userData['password'] = this.formG.get('password')?.value;        
      }
      
    this._userService.createUser(userData).subscribe(
      {
        next:(resp:any)=>{
          console.log(resp);
          const userid = resp['data'][0]['data']._id;
          const formData = new FormData();
          formData.append('img',this.files[0])
          
          this._userService.uploadImage(formData,userid).subscribe(
            {
              next:(response)=>{
                console.log(response);
              },
              error:(err)=>{
                console.log(err);
                this._toast.showInfo('No se pudo guardar el empleado')
                this.loading.emit();
              },
              complete:()=>{
                this.loading.emit();
                this._toast.showSucces('Usuario registrado correctamente')
                this.returnTable();
              }
            }
          )
          
        },
        error:(err)=>{
          console.log(err);
          if(err.error.data.code == 11000){
            this._toast.showInfo('El correo ya esta en uso')
          }else{
            this._toast.showInfo('No se pudo guardar el empleado')
          }
          this.loading.emit();
        }        
      }
    )
    }else{
      this._toast.showWarning('Debe llenar todos los campos requeridos con su imagen');
      this.formG.markAllAsTouched();
    }
  }
  imgPreview:any;
  onSelect(event:any) {
    this.imgPreview = URL.createObjectURL(event.addedFiles[0])        
    this.files.push(...event.addedFiles);    
    
    
  }
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  returnTable(){
    this.goBack.emit();
  }

}
