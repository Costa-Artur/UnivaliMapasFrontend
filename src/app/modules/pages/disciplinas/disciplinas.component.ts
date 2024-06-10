import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DisciplinaComponent } from '../../components/disciplina/disciplina.component';
import { BlockDropdownComponent } from '../../components/block-dropdown/block-dropdown.component';
import { ClassDropdownComponent } from '../../components/class-dropdown/class-dropdown.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { AulaInterface } from '../../interfaces/aula.interface';
import { AulasService } from '../../services/aulas.service';
import { DateFormatPipe } from "../../pipes/date-format.pipe";
import { DropdownModule } from 'primeng/dropdown';
import { BlocoForDropdown, BlocoPopulatedInterface, SalaPopulatedInterface } from '../../interfaces/bloco.interface';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-disciplinas',
    standalone: true,
    templateUrl: './disciplinas.component.html',
    styleUrls: ['./disciplinas.component.scss'],
    imports: [CommonModule, DisciplinaComponent, BlockDropdownComponent, ClassDropdownComponent, SidebarComponent, DateFormatPipe, DropdownModule, FormsModule]
})
export class DisciplinasComponent implements OnInit  {

  aulas: AulaInterface[] = [];
  selectedAula: AulaInterface | undefined;
  isEditOpen: boolean = false;
  blocosWithSalas: BlocoPopulatedInterface[] = [];

  selectedBloco: BlocoPopulatedInterface | undefined;
  selectedSala: SalaPopulatedInterface | undefined;

  blocosOptions: any[] = [];
  salasOptions: any[] = [];

  constructor(private service: AulasService) { }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  ngOnInit(): void {
    this.service.getAulasByStudentId(1).subscribe((data) => {
      console.log('Aulas:', data);
      this.aulas = data;
    });

    this.service.getBlocosWithSalas().subscribe((data) => {
      console.log('Blocos com Salas:', data);
      this.blocosWithSalas = data;
      this.blocosOptions = this.blocosWithSalas.map(bloco => ({
        label: bloco.letraBloco,
        value: bloco
      }));
    });
}

onBlocoChange(event: { value: BlocoForDropdown }) {
    console.log('Bloco selecionado:', event.value);
    if (event && event.value && event.value.value.salas) {
        this.salasOptions = event.value.value.salas.map(sala => ({
          label: sala.number.toString(), // Convert number to string for optionLabel
          value: sala.salaId
        }));
        console.log('Salas Options:', this.salasOptions);
    } else {
        this.salasOptions = [];
    }
    this.selectedSala = undefined;  // Clear selected sala when bloco changes
}


  openEditModal(index: number): void {
    console.log(index);
    this.isEditOpen = true;
    this.selectedAula = this.aulas[index];
  }

  save() {
    console.log("salvando");
    if (this.selectedSala && this.selectedAula) {
      this.service.updateAula(this.selectedSala, this.selectedAula.aulaId).subscribe(() => {
        console.log('Aula atualizada');
        this.isEditOpen = false;
      });
    }
    document.location.reload();
  }
}
