import { Component } from '@angular/core';
import { SalidaService } from '../../services/table/salida.service';
import { Salida } from '../../services/auth/registerRequest';

@Component({
  selector: 'app-salida-tabla',
  templateUrl: './salida-tabla.component.html',
  styleUrl: './salida-tabla.component.css'
})
export class SalidaTablaComponent {
  salidaDatos?:Salida[];


  constructor(private verSalida:SalidaService){}

  dato(){
    this.verSalida.listaSalidaToda().subscribe({
      next: (userData) =>{
        console.log(userData)
        this.salidaDatos = userData
      },
      error:(userData) => {
          console.log(userData)
          alert("Error al iniciar sesion")
      },
      complete:()=> {
          console.info("login completo ")
          
      }
    })
  }
}
