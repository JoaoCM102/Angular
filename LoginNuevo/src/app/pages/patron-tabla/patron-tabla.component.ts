import { Component } from '@angular/core';
import { Patron } from '../../services/auth/registerRequest';
import { PatronService } from '../../services/table/patron.service';

@Component({
  selector: 'app-patron-tabla',
  templateUrl: './patron-tabla.component.html',
  styleUrl: './patron-tabla.component.css'
})
export class PatronTablaComponent {
  patronDatos?:Patron[];


  constructor(private verPatron:PatronService){}

  dato(){
    this.verPatron.listaPatronToda().subscribe({
      next: (userData) =>{
        console.log(userData)
        this.patronDatos = userData
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
