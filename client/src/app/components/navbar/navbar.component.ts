import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  changeStyle: Boolean;

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logoutSubmit() {
    this.changeStyle = false;
    this.authenticateService.logout();
    swal({
      title: 'Logged Out',
      text: 'You have logged out successfully',
      type: 'success',
      confirmButtonText: 'Cya!',
    });
    this.router.navigate(['']);
    return false;
  }

  changeNavbarTextColor(event) {
    this.changeStyle = true;
  }

  brandClicked() {
    this.changeStyle = false;
  }

  blogClicked() {
    this.changeStyle = true;
  }

  dashboardClicked() {
    this.changeStyle = true;
  }

  profileClicked() {
    this.changeStyle = true;
  }

  getStyle() {
    if(this.changeStyle) {
      return '#2ecc71';
    } else {
      return '#fff';
    }
  }
}
