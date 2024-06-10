import { Component } from '@angular/core';
import { AlunoComponent } from '../aluno/aluno.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AulaInterface } from '../../interfaces/aula.interface';
import { AulasService } from '../../services/aulas.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
    selector: 'app-calendario',
    standalone: true,
    templateUrl: './calendario.component.html',
    styleUrl: './calendario.component.scss',
    imports: [AlunoComponent, SidebarComponent, FormsModule, CalendarModule, RouterLink, RouterLinkActive]
})
export class CalendarioComponent {
    //Selecionar data e exibir no card
    date: Date[] | undefined;
    diaNome: string | undefined;
    diaNumero: string | undefined;
    isDateSelected = false;
    isClassDay = false

    aulas: AulaInterface[] = [];
    selectedAula: AulaInterface | undefined;

    diaAula: string | undefined;
    mesAula: string | undefined;
    anoAula: string | undefined;

    salaAula: number | undefined
    materiaAula: string | undefined
    blocoAula: string | undefined
    professorAula: string | undefined

    selectDate() {
        let dateString = this.date?.toString();
        let splittedDate = dateString?.split(" ", 3);

        if (splittedDate) {
            this.diaNome = splittedDate[0];
            this.diaNumero = splittedDate[2];
            this.isDateSelected = true;

            this.selectedAula = this.aulas.find((aula) => {
                let splittedAulaDate = aula.data.split("-")

                this.diaAula = splittedAulaDate[2].split("T")[0]
                this.mesAula = splittedAulaDate[1]
                this.anoAula = splittedAulaDate[0]

                if (this.diaNumero == this.diaAula) {
                    this.materiaAula = aula.materia.name
                    this.blocoAula = aula.sala.bloco.letraBloco
                    this.salaAula = aula.sala.number
                    this.professorAula = aula.materia.professor.name
                    this.isClassDay = true
                } else {
                    this.isClassDay = false
                }
              });
        }
    }

    //Exibir no card informações sobre a aula daquele dia
    constructor(private service: AulasService) { }

    ngOnInit(): void {
        this.service.getAulasByStudentId(1).subscribe((data) => {
          console.log(data);
          this.aulas = data;
        });
      }

      showClassInfo(index: number): void {
        console.log(index);
        this.selectedAula = this.aulas[index];
      }
}
