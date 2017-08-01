import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  moduleId: module.id,
  selector: 'app-auth-results',
  templateUrl: './auth-results.component.html',
  styleUrls: ['./auth-results.component.css']
})
export class AuthResultsComponent implements OnInit {
  @Input() isLoggin: any;
  @Input() loginError: any;

  constructor(
  ) { }

  ngOnInit() {
    // console.log(this.isLoggin);
    // this.isLoggin = this.logginComponent.isLoggin;
    // this.loginError = this.logginComponent.loginError;
    // console.log(this.loginComponent.isLoggin);
    // console.log(this.loginComponent.loginError);
  }
}
