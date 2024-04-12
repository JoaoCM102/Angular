import { Component } from '@angular/core';
import { Barco } from '../../services/auth/registerRequest';
import { BarcoService } from '../../services/table/barco.service';

@Component({
  selector: 'app-barcos-tabla',
  templateUrl: './barcos-tabla.component.html',
  styleUrl: './barcos-tabla.component.css'
})
export class BarcosTablaComponent {
  barcoDato?:Barco[];


  constructor(private verBarco:BarcoService){}

  dato(){
    this.verBarco.listaBarcoToda().subscribe({
      next: (userData) =>{
        console.log(userData)
        this.barcoDato = userData
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
