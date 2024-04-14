import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { RegisterService } from '../../services/auth/register.service';
import * as jwt_decode from 'jwt-decode';
import { RegisterRequest } from '../../services/auth/registerRequest';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  token:string=""
  verOn:boolean= false
  decodedToken:string=""
  datosUsuario: RegisterRequest | null = null;


  constructor(private login:LoginService,private register:RegisterService){}
  ngOnInit(): void {
    this.login.currentUserLogin.subscribe({
      next:(userOn)=>{
        this.verOn=userOn;
        console.info(userOn)
      }
    });

    

    this.login.currentUserData.subscribe({
      next:(userOn)=>{
        this.token=userOn;
        console.info(this.token)
      }
    });
  

}
}
