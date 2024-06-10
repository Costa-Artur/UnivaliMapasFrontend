import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  messages: Message[] | undefined;
  codigoPessoa: string = '';
  password: string = '';

  constructor(private router: Router, private service: LoginService) {}

  goToItems() {
    console.log(this.codigoPessoa);
    if(this.codigoPessoa && this.password) {
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
    } else if(this.codigoPessoa !== '' && this.codigoPessoa != "11111111" && this.codigoPessoa != "22222222" && this.codigoPessoa != "33333333") {

      this.messages = [{severity: 'error', summary: '', detail: 'Informe um código de pessoa válido'}];
    }
    else if (this.codigoPessoa != '' && this.password != "senha123") {
      this.messages = [{severity: 'error', summary: '', detail: 'Informe a senha correta'}];
    } else {
      this.messages = [{severity: 'error', summary: '', detail: 'Informe login e senha'}];
    }

  }

  visitor() {
    this.service.logout();
    this.router.navigate(['/aluno-page']);
  }
}
