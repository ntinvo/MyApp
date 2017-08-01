import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';
import { AuthResultsComponent } from '../auth-results/auth-results.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

@NgModule({
  declarations: [ AuthResultsComponent ]
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
        swal({
          title: 'Logged In',
          text: 'You have logged in successfully',
          type: 'success',
          confirmButtonText: 'Yay!',
        });
        this.router.navigate(['dashboard']);
      } else {
        swal({
          title: 'Error!',
          text: 'Invalid email or password',
          type: 'error',
          confirmButtonText: 'Cool',
        });
      }
    });
  }
}
