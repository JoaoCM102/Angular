import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  verOn:boolean=false;

  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    this.loginService.currentUserLogin.subscribe({
      next:(userOn)=>{
        this.verOn=userOn;
        console.log(this.verOn)
      }
    });
  }

}
