import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { MapaComponent } from '../mapa/mapa.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CalendarComponent, CalendarioComponent, MapaComponent, RouterLink, RouterLinkActive, SidebarComponent],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss'
})
export class AlunoComponent {

}
