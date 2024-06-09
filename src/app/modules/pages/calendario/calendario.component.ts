import { Component } from '@angular/core';
import { AlunoComponent } from '../aluno/aluno.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AulaInterface } from '../../interfaces/aula.interface';
import { AulasService } from '../../services/aulas.service';

@Component({
    selector: 'app-calendario',
    standalone: true,
    templateUrl: './calendario.component.html',
    styleUrl: './calendario.component.scss',
    imports: [AlunoComponent, SidebarComponent, FormsModule, CalendarModule]
})
export class CalendarioComponent {
    //Selecionar data e exibir no card
    date: Date[] | undefined;
    diaNome: string | undefined;
    diaNumero: string | undefined;
    isDateSelected = false;
    
    selectDate() {
        let dateString = this.date?.toString();
        let splittedDate = dateString?.split(" ", 3);
        
        if (splittedDate) {
            this.diaNome = splittedDate[0];
            this.diaNumero = splittedDate[2];
            this.isDateSelected = true;
        }
    }

    //Exibir no card informações sobre a aula daquele dia
    aulas: AulaInterface[] = [];
    selectedAula: AulaInterface | undefined;

    constructor(private service: AulasService) { }
    
    ngOnInit(): void {
        this.service.getAulasByStudentId(1).subscribe((data) => {
          console.log(data);
          this.aulas = data;
        });
      }
}
