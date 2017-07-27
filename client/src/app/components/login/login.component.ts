import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.authenticateService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authenticateService.storeUserData(data.token, data.user);
        this.router.navigate(['profile']);
      } else {
        console.log(data.message);
        this.router.navigate(['authresults'])
        // NOTE: notify error to user here
      }
    });
  }
}
