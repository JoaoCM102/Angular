import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/auth/register.service';
import { DatosRequest, RegisterRequest } from '../../services/auth/registerRequest';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent implements OnInit {
    grupo=  this.formBuilder.group({
    telefono: ["123456789", [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
    codigoPostal: ["3238", Validators.required],
    calle: ["luca", Validators.required],
    email: ["luca@gmail.com", [Validators.required, Validators.email]]})


    register = this.formBuilder.group({
    fistname: ["luca", [Validators.required]],
    lastName: ["luca", Validators.required],
    country: ["luca", Validators.required],
    username: ["luca", Validators.required],
    password: ["luca", Validators.required],
    datos: this.grupo.value as DatosRequest
  })


  logueo: LoginRequest | undefined 
  



  registrar() {
    if (this.register.valid) {
      this.registerService.register(this.register.value as RegisterRequest).subscribe({
        next: (userData) =>{
          this.login.logout();
          console.log(userData)
        },
        error:(userData) => {
            console.log(userData)
            
            this.router.navigateByUrl("/inicioSesion")
            alert("Error al registrar sesion")
        },
        complete:()=> {
          this.router.navigateByUrl("/inicioSesion")
        },
      }
      )
      console.log(this.register.value)
    } else {
      this.register.markAllAsTouched();
      alert("Error al loguear");
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService,private login:LoginService) { }

  ngOnInit(): void { }
}
