import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DisciplinaComponent } from '../../components/disciplina/disciplina.component';
import { BlockDropdownComponent } from '../../components/block-dropdown/block-dropdown.component';
import { ClassDropdownComponent } from '../../components/class-dropdown/class-dropdown.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { AulaInterface } from '../../interfaces/aula.interface';
import { AulasService } from '../../services/aulas.service';
import { DateFormatPipe } from "../../pipes/date-format.pipe";

@Component({
    selector: 'app-disciplinas',
    standalone: true,
    templateUrl: './disciplinas.component.html',
    styleUrl: './disciplinas.component.scss',
    imports: [CommonModule, DisciplinaComponent, BlockDropdownComponent, ClassDropdownComponent, SidebarComponent, DateFormatPipe]
})
export class DisciplinasComponent implements OnInit  {

  aulas: AulaInterface[] = [];
  selectedAula: AulaInterface | undefined;
  isEditOpen : boolean = false;

  constructor(private service: AulasService) { }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  ngOnInit(): void {
    console.log("teste")
    this.service.getAulasByStudentId(1).subscribe((data) => {
      console.log(data);
      this.aulas = data;
    });
  }

  openEditModal(index: number): void {
    console.log(index);
    this.isEditOpen = true;
    this.selectedAula = this.aulas[index];
  }
}
