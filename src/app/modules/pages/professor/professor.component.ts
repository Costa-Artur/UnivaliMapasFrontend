import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { MapaComponent } from '../mapa/mapa.component';
import { DisciplinasComponent } from '../disciplinas/disciplinas.component';


@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [CalendarComponent, CalendarioComponent, MapaComponent, DisciplinasComponent],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss'
})
export class ProfessorComponent {

}
