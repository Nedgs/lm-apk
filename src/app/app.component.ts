import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  sideBarOpen = true;

  constructor(public authService: AuthService, private router: Router) {
    
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit () {
    let isloggedin: any;
    let loggedUser:any;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
}
