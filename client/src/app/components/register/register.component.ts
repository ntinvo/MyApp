import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit() {
  }

  registerSubmit() {
    // Validation user inputs
    if(!this.validateService.validateEmail(this.email)) {
      console.log('Invalid email');
      return false;
    }

    if(!this.validateService.validatePasswords(this.password, this.password2)) {
      console.log('Passwords don\'t match');
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
