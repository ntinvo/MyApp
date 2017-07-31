import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private auth: AuthenticateService,
    private router: Router
  ) { }

  canActivate() {
    if(this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['authresults']);
      return false;
    }
  }
}
