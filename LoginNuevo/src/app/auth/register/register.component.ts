import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/auth/register.service';
import { DatosRequest, RegisterRequest } from '../../services/auth/registerRequest';
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


  



  registrar() {
    if (this.register.valid) {
      this.registerService.register(this.register.value as RegisterRequest).subscribe({
        next: (userData) =>{
          console.log(userData)
        },
        error:(userData) => {
            console.log(userData)
            this.router.navigateByUrl("/registro")
            alert("Error al registrar sesion")
        },
        complete:()=> {
            console.info("login completo ")
            this.router.navigateByUrl("inicio");
           this.register.reset();
        },
      }
      )
      console.log(this.register.value)
    } else {
      this.register.markAllAsTouched();
      alert("Error al loguear");
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void { }
}
