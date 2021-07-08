import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: LoginService, private router: Router) { }

    canActivate() {
        if ( this.authService.isLogged() ) {
            return true;
          } else {
            this.router.navigateByUrl('/login');
            return false;
          }
    }
}
