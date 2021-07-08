import { Injectable } from '@angular/core';
import {Router} from "@angular/router"
import { User } from 'src/app/models/user/user.module';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private user:User = {
    userName: "secretaria",
    password: "123456"
  }
  constructor( private router: Router) { }

  isLogged(){
    let user = JSON.parse(localStorage.getItem('user') +"");
    if(user == "" || user == null || user == undefined){
      localStorage.setItem('login', '0');
      return false;
    }
    localStorage.setItem('login', '1');
    return true;
  }

  login(usr:User){
    if(this.user.userName == usr.userName && this.user.password == usr.password){
      localStorage.setItem("user", JSON.stringify(this.user));
    }
  }

  logOut(){
    localStorage.clear();
  }
}
