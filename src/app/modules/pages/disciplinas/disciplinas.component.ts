import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisciplinaComponent } from '../../components/disciplina/disciplina.component';
import { BlockDropdownComponent } from '../../components/block-dropdown/block-dropdown.component';
import { ClassDropdownComponent } from '../../components/class-dropdown/class-dropdown.component';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, DisciplinaComponent, BlockDropdownComponent, ClassDropdownComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {

}
