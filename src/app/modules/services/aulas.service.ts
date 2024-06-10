import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AulaInterface } from '../interfaces/aula.interface';
import { BlocoPopulatedInterface, SalaPopulatedInterface } from '../interfaces/bloco.interface';

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  private url = "http://localhost:5000/api/"

  constructor(private http: HttpClient) { }

  getAulasByStudentId(studentId: number) : Observable<AulaInterface[]> {
    return this.http.get<AulaInterface[]>(this.url + 'aulas/student/' + studentId)
  }

  getBlocosWithSalas() : Observable<BlocoPopulatedInterface[]> {
    return this.http.get<BlocoPopulatedInterface[]>(this.url + 'blocos/com-sala')
  }

  updateAula(sala: any, aulaId: number) : Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log('Sala:', sala);

    return this.http.put(this.url + `aulas/${aulaId}`, {salaId: sala.value, aulaId: aulaId}, httpOptions)
  }
}
