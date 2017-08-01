import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  password2: String;

  constructor(
    private validateService: ValidateService,
    private authenticateService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerSubmit() {
    // Validation user inputs
    if(this.email == undefined || this.username == undefined || this.password == undefined) {
      swal({
        title: 'Error',
        text: 'username, email, and password cannot be blank',
        type: 'warning',
        confirmButtonText: 'Close',
      });
      return false;
    }

    if(!this.validateService.validateEmail(this.email)) {
      swal({
        title: 'Error',
        text: 'Please enter a valid email address',
        type: 'warning',
        confirmButtonText: 'Close',
      });
      return false;
    }

    if(!this.validateService.validatePasswords(this.password, this.password2)) {
      swal({
        title: 'Error',
        text: 'Passwords do not match',
        type: 'warning',
        confirmButtonText: 'Close',
      });
      return false;
    }

    // Create user obj
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password
    }

    // Register user
    this.authenticateService.registerUser(user).subscribe(data => {
      if(data.success) {
        console.log('Used is registered');
        this.router.navigate(['/authresults']);
      } else {
        console.log('There is an error registering this user');
        this.router.navigate(['/authresults']);
      }
    });
  }
}
