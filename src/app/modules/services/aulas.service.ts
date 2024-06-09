import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AulaInterface } from '../interfaces/aula.interface';

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  private url = "http://localhost:5000/api/"

  constructor(private http: HttpClient) { }

  getAulasByStudentId(studentId: number) : Observable<AulaInterface[]> {
    return this.http.get<AulaInterface[]>(this.url + 'aulas/student/' + studentId)
  }
}
