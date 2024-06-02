import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { AlunoComponent } from './modules/pages/aluno/aluno.component';
import { CalendarComponent } from './modules/components/calendar/calendar.component';
import { ProfessorComponent } from "./modules/pages/professor/professor.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet />
    <!-- <app-login /> -->
    <!-- <app-aluno /> -->
    <app-professor />
    
  `,
    imports: [RouterOutlet, LoginComponent, AlunoComponent, CalendarComponent, ProfessorComponent]
})
export class AppComponent {
  title = 'UnivaliMapas';
}
