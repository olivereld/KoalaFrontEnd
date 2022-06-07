import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYE } from 'src/app/consulta/model/data.model';
import { environment } from 'src/environments/environment';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    employer:EMPLOYE | any;

    isLoading:boolean = true;
    host = environment.API_IMG;
    @Input() userData:any = {
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
