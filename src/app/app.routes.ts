import { Routes } from '@angular/router';
import { DisciplinasComponent } from './modules/pages/disciplinas/disciplinas.component';
import { MapaComponent } from './modules/pages/mapa/mapa.component';
import { AlunoComponent } from './modules/pages/aluno/aluno.component';
import { ProfessorComponent } from './modules/pages/professor/professor.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { CalendarioComponent } from './modules/pages/calendario/calendario.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    { path: 'calendar-page', component: CalendarioComponent},
    { path: 'disciplines-page', component: DisciplinasComponent},
    { path: 'map-page', component: MapaComponent},
    { path: 'aluno-page', component: AlunoComponent},
    { path: 'professor-page', component: ProfessorComponent},
];
