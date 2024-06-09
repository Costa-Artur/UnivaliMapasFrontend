import { Component } from '@angular/core';
import { CalendarioComponent } from '../calendario/calendario.component';
import { MapaComponent } from '../mapa/mapa.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CalendarioComponent, MapaComponent, RouterLink, RouterLinkActive, SidebarComponent],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss'
})
export class AlunoComponent {

}
