import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { AlunoComponent } from './modules/pages/aluno/aluno.component';
import { CalendarComponent } from './modules/components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, AlunoComponent, CalendarComponent],
  template: `
    <router-outlet />
    <app-login />
    <app-aluno />
    
  `
})
export class AppComponent {
  title = 'UnivaliMapas';
}
