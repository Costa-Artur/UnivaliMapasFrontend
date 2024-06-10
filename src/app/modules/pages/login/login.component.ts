import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import jwt_decode, { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  codigoPessoa: string = '';
  password: string = '';

  constructor(private router: Router, private service: LoginService) {}

  goToItems() {
    console.log(this.codigoPessoa);
    this.service.login(this.codigoPessoa, this.password).subscribe((userInfo) => {
      if(userInfo) {
        const decodedToken : any = jwtDecode(userInfo.token);
        if(decodedToken.role === "Student") {
          this.router.navigate(['/calendar-page']);
        }
        else if (decodedToken.role === "Professor") {
          this.router.navigate(['/disciplines-page']);
        } else {
          this.router.navigate(['/aluno-page']);
        }
      }
    });
  }

  visitor() {
    this.service.logout();
    this.router.navigate(['/aluno-page']);
  }
}
