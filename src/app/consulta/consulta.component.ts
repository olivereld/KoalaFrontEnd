import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsersService } from '../aplication/services/users.service';
import { EMPLOYE } from './model/data.model';

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
  userData:any = {
    fullname:'',
    work:'',
    phone:'',
    email:'',
    website:'',
    linkedin:'',
    img:'',

  };
  constructor(private userService:UsersService,private router:ActivatedRoute) { 
    this.getUserById();
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
  }

}
