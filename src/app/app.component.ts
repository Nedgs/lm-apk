import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./login/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "front";
  sideBarOpen = true;

  constructor(public authService: AuthService, private router: Router) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit() {
    this.authService.loadToken();
    if (this.authService.getToken() == null || this.authService.isTokenExpired())
      this.router.navigate(["/login"]);
  }
}
