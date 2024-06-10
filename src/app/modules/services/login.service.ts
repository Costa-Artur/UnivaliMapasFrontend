import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/aula.interface';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LoggedUserInterface, loginInterface, loginResponseInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:5000/api/";
  public loggedUserInfo: LoggedUserInterface | undefined;

  constructor(private http: HttpClient) {
    this.loadUserFromLocalStorage();
  }

  logout() {
    this.loggedUserInfo = undefined;
    localStorage.removeItem('loggedUserInfo');
  }

  login(codigoPessoa: string, password: string): Observable<LoggedUserInterface> {
    const login: loginInterface = { codigoPessoa, password };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<loginResponseInterface>(
      `${this.url}autenticacao/autenticar`,
      login,
      { headers }
    ).pipe(
      switchMap((response) => {
        const token = response.token;

        return this.http.get<LoggedUserInterface>(`${this.url}autenticacao/user-info/${codigoPessoa}`).pipe(
          map((userInfo) => {
            userInfo.token = token;
            this.loggedUserInfo = userInfo;
            this.saveUserToLocalStorage(userInfo);
            return userInfo;
          })
        );
      })
    );
  }

  private saveUserToLocalStorage(userInfo: LoggedUserInterface) {
    localStorage.setItem('loggedUserInfo', JSON.stringify(userInfo));
  }

  private loadUserFromLocalStorage() {
    const userInfoJson = localStorage.getItem('loggedUserInfo');
    if (userInfoJson) {
      this.loggedUserInfo = JSON.parse(userInfoJson) as LoggedUserInterface;
    }
  }
}
