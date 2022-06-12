import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYE } from 'src/app/consulta/model/data.model';
import { environment } from 'src/environments/environment';
import { UsersService } from '../../services/users.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY,flipOutY,fadeIn,fadeOut } from 'ng-animate';
import { timer } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage, base64ToFile  } from 'ngx-image-cropper';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
    animations:[
      trigger('flipInY', [
        transition(':enter', useAnimation(flipInY)),
        transition(':leave', useAnimation(flipOutY))
      ]),
      trigger('edition', [
        transition(':enter', useAnimation(fadeIn)),
        transition(':leave', useAnimation(fadeOut))
      ]),
    ]
})
export class EditComponent implements OnInit {
    employer:EMPLOYE | any;
    preview:boolean = false;
    isLoading:boolean = true;
    host = environment.API_IMG;
    flipInY:any;
    flipOutY:any;
    @Output() loading = new EventEmitter();
    @Output() goBack = new EventEmitter();

    imageChangedEvent: any = '';
    croppedImage: any = '';

    edition:any;
    animationProces=false;
    newImage:any;

     archivos = [];

    
    @Input() userData:any = {
      username:  '',
      password:  '',
      fullname:  '',      
      email:     '',      
      phone:     '',
      work:      '',
      role:      '',
      linkedin:  '',
      img:       '',
    };
    userDataPreview = {
      username:  '',
      password:  '',
      fullname:  '',      
      email:     '',      
      phone:     '',
      work:      '',
      role:      '',
      linkedin:  '',
      img:       '',
    }
    

    formG:FormGroup = this._formB.group({});
    constructor(
      private userService:UsersService,
      private router:ActivatedRoute,
      private _formB:FormBuilder,
      private sanitizer:DomSanitizer) {       
      
    }

    updateInformation(){
      this.loading.emit();
      this.userService.updateUser(this.userData._id,this.formG.value).subscribe( resp => {
        console.log('Usuario editado');  
          if(this.croppedImage){
            console.log('Subiendo imagen')
            const formData = new FormData();
          formData.append('img',base64ToFile(this.croppedImage))
          this.userService.uploadImage(formData,this.userData._id).subscribe(
          {
            next:(response)=>{
              console.log(response);
            },
            error:(err)=>{
              console.log(err);
              this.loading.emit();
            },
            complete:()=>{
              this.loading.emit();
              this.goBack.emit();
            }
          })

          } else{
            this.loading.emit();
            this.goBack.emit();
          }   
          
        
      });
    }

    createForm(){
      this.formG = this._formB.group(
        {
          username: [this.userData.username,[Validators.min(4)]],
          password: [this.userData.password,[Validators.min(4)]],
          fullname: [this.userData.fullname,[Validators.required,Validators.min(4)]],          
          email:    [this.userData.email,[Validators.required,Validators.min(4)]],          
          phone:    [this.userData.phone,[Validators.required, Validators.min(4)]],
          work:     [this.userData.work,[Validators.required,Validators.min(4)]],
          role:     [this.userData.role,[Validators.min(4)]],
          linkedin: [this.userData.linkedin,[Validators.min(4)]],        
          img:      [this.userData.img,[Validators.min(4)]],
        },
      )
    }
    getAnimation(){
      return this.preview?this.flipInY:this.flipOutY;
    }
    getUserById(){
      const id = this.router.snapshot.params['id'];
        this.userService.getUser(id).subscribe( (data:any) =>{
        this.userData = data['data'][0];
        console.log(this.userData);
        this.isLoading = false;
  
      })
      
    }
    ngOnInit(): void {
      this.croppedImage = '';
      this.createForm();
      this.updateDataPreview();      
    }

    switchPreview(){
      if(this.preview){
        this.preview = !this.preview
        const eventDelay = timer(1000);
        eventDelay.subscribe(t => {
          this.animationProces=false;
        })
      }else{
        this.preview = !this.preview
        this.updateDataPreview();
        const eventDelay = timer(1000);
        eventDelay.subscribe(t => {          
          this.animationProces = true;
        })
      }
    }

  updateDataPreview(){
      this.userDataPreview = this.formG.value;
  }
  

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;          
      console.log(event);      
  }
  imageLoadeds(image: LoadedImage) {
      console.log('Uploading');      
  }
  cropperReady() {
      console.log('ready');
  }
  
  loadImageFailed() {

  }

}
