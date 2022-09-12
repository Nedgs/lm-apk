import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  date = new Date();

  constructor(public authService: AuthService) {

   }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }






}
