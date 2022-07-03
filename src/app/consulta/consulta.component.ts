import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsersService } from '../aplication/services/users.service';
import { EMPLOYE } from './model/data.model';
import { VCard,VCardEncoding, VCardFormatter } from "ngx-vcard";
import { MatDialog } from '@angular/material/dialog';
import { ConsultDialogComponent } from './dialog/consult-dialog';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss',
              './body.consulta.component.scss',
              './header.consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  employer:EMPLOYE | any;
  isLoading:boolean = true;
  host = environment.API_IMG;
  public vCardEncoding: typeof VCardEncoding = VCardEncoding;
  userData:any = {
    fullname:'',
    work:'',
    phone:'',
    email:'',
    website:'',
    linkedin:'',
    img:'',

  };
  constructor(
    private userService:UsersService,
    public dialog: MatDialog,
    private router:ActivatedRoute,
    private enRoute:Router,
    private sanitizer:DomSanitizer
    ) { 
    this.getUserById();
  }

  openDialog(): void {
    this.dialog.open( ConsultDialogComponent,
      {
        width: '250px',  
        data:{
          url:this.router.snapshot
        }            
      })
  }
  

  getUserById(){
    const id = this.router.snapshot.params['id'];
      this.userService.getUser(id).subscribe( (data:any) =>{
      this.userData = data['data'][0];
      console.log(this.userData);
      this.isLoading = false;
    },
    (error) =>{
      this.isLoading = true;
      this.enRoute.navigate(['notfound/404'])
    })
    
  }
  generateVCard = ():VCard => {
    
    return {
      version:'3.0',
      photo:this.host+this.userData.img,
      name: { firstNames: this.getFirstName(),lastNames:this.getLastName() },
      email:[{
        value:this.userData.email,
        param:{type:'work'}}],
      telephone:[{
        value:this.userData.phone,
        param:{type:['cell','voice']}
      }],
      organization:'The Koala Group c.a',    
      url:{work:'https://koalaandina.com',home:''},  
      title:this.userData.work,
    };

  };
  ngOnInit(): void {
  }

  getFirstName(){
    return this.userData.fullname.split(' ')[0];
  }
  getLastName(){
    const longitud = this.userData.fullname.split(' ').length -1;
    return this.userData.fullname.split(' ')[longitud];
  }

  transform() {
    try{
      const url = JSON.parse(this.userData.img).url;
      return (url);

    }catch(err){
      return 'assets/noimage.webp'
    }
  }

}
