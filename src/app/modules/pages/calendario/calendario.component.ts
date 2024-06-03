import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { AlunoComponent } from '../aluno/aluno.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
    selector: 'app-calendario',
    standalone: true,
    templateUrl: './calendario.component.html',
    styleUrl: './calendario.component.scss',
    imports: [CalendarComponent, AlunoComponent, SidebarComponent]
})
export class CalendarioComponent {

}
