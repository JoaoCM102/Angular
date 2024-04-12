import { Component } from '@angular/core';
import { Barco } from '../../services/auth/registerRequest';

@Component({
  selector: 'app-barcos-tabla',
  templateUrl: './barcos-tabla.component.html',
  styleUrl: './barcos-tabla.component.css'
})
export class BarcosTablaComponent {
  barcoDato?:Barco[];

  
  constructor(){}
}
