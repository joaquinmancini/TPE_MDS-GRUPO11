import { Injectable } from '@angular/core';
import {Router} from "@angular/router"
import { User } from 'src/app/models/user/user.module';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private user:User = {
    userName: "admin",
    password: "admin"
  }
  constructor( private router: Router) { }

  isLogged(){
    let user = JSON.parse(localStorage.getItem('user') +"");
    if(user == "" || user == null || user == undefined){
      return false;
    }
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
