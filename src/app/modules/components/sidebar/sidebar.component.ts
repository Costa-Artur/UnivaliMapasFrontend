import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoggedUserInterface } from '../../interfaces/user.interface';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  loggedUser: LoggedUserInterface | undefined;
  loggedUserRole : any;

  constructor(private router: Router, private service: LoginService) {}

  ngOnInit(): void {
    this.loggedUser = this.service.loggedUserInfo;

    if(this.loggedUser) {
      this.loggedUserRole = jwtDecode(this.loggedUser.token);
      console.log(this.loggedUserRole);
    }
  }

  goToItems() {
    this.router.navigate(['/login']);
  }
}
