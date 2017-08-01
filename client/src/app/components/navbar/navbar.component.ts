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

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logoutSubmit() {
    this.authenticateService.logout();
    swal({
      title: 'Logged Out',
      text: 'You have logged out successfully.',
      type: 'success',
      confirmButtonText: 'Cya!',
    });
    this.router.navigate(['']);
    return false;
  }
}
