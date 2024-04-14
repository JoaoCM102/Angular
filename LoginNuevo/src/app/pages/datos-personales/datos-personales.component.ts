import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { RegisterService } from '../../services/auth/register.service';
import { RegisterRequest } from '../../services/auth/registerRequest';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})
export class DatosPersonalesComponent implements OnInit {
  token : string | null = ""
  verOn:boolean= false
  decodedToken:string=""
  datosUsuario: RegisterRequest | null = null;


  constructor(private login:LoginService,private register:RegisterService){
    this.token = sessionStorage.getItem(`token`) || null;
  }
  ngOnInit(): void {
    this.login.currentUserLogin.subscribe({
      next:(userOn)=>{
        this.verOn=userOn;
      }
    });

    this.login.currentUserData.subscribe({
      next:(userOn)=>{
        this.token=userOn;
        console.info(this.token)
      }
    });
    
    console.info(this.token)
    if (this.token!=null) {
      
      console.info(this.token)
    const tokenPayload = this.token.split('.')[1];
    const decodedPayload = atob(tokenPayload);
    this.decodedToken = JSON.parse(decodedPayload);
    console.log('Token decodificado:', this.decodedToken);
    console.log('id ' + this.decodedToken.sub)
    console.log(this.register.verDatos("pedro"))
    this.register.verDatos("pedro").subscribe({
      next:(datos : RegisterRequest)=>{
        console.info(datos.country)
        this.datosUsuario= datos
      }
    });
  } else {
    console.log('No se encontró ningún token en el sessionStorage.');
  }
  }
}
