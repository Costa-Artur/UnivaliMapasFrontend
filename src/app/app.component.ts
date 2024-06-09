import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { AlunoComponent } from './modules/pages/aluno/aluno.component';
import { ProfessorComponent } from "./modules/pages/professor/professor.component";
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet />
    <!-- <app-login /> -->
    <!-- <app-aluno /> -->
    <!-- <app-professor /> -->
    
  `,
    imports: [RouterOutlet, LoginComponent, AlunoComponent, ProfessorComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'UnivaliMapas';
}
