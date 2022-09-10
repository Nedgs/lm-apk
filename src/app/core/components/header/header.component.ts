import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
