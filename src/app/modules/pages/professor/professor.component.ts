import { Component } from '@angular/core';
import { CalendarioComponent } from '../calendario/calendario.component';
import { MapaComponent } from '../mapa/mapa.component';
import { DisciplinasComponent } from '../disciplinas/disciplinas.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";


@Component({
    selector: 'app-professor',
    standalone: true,
    templateUrl: './professor.component.html',
    styleUrl: './professor.component.scss',
    imports: [CalendarioComponent, MapaComponent, DisciplinasComponent, SidebarComponent]
})
export class ProfessorComponent {

}
