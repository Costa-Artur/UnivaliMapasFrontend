import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { AlunoComponent } from './modules/pages/aluno/aluno.component';
import { CalendarComponent } from './modules/components/calendar/calendar.component';
import { ProfessorComponent } from "./modules/pages/professor/professor.component";
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet />
    <!-- <app-login /> -->
    <!-- <app-aluno /> -->
    <!-- <app-professor /> -->
    
  `,
    imports: [RouterOutlet, LoginComponent, AlunoComponent, CalendarComponent, ProfessorComponent, RouterLink, RouterLinkActive]
})
export class AppComponent implements OnInit {
  title = 'UnivaliMapas';

  
  constructor(private config: PrimeNGConfig, private translateService: TranslateService) {}

    ngOnInit() {
        this.translateService.setDefaultLang('FR');
    }

    translate(lang: string) {
        this.translateService.use(lang);
        this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
    }
}
