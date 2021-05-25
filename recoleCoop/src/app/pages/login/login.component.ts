import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/User.module';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage:string = "";

  private user : User = {
    userName: "",
    password: ""
  }
  constructor(private _login:LoginService, private router: Router) { 
    if(!this._login.isLogged){
      this.router.navigate(["/home"]);
    }
  }

  ngOnInit(): void {
    
  }

  login(){
    this._login.login(this.user);

    if(this._login.isLogged()){
      this.router.navigate(["/home"]);
    }
    this.errorMessage = "Contraseña y/o nombre de usuario incorrectos";
  }

  setUserName(){
  //  this.user.userName = event.target.value;
  }

  setPassword(){
    // this.user.password =  event.target.value
  }

}