import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  standalone: true,
  imports: [],
  templateUrl: './disciplina.component.html',
  styleUrl: './disciplina.component.scss'
})
export class DisciplinaComponent {
  @Input() name: string = "";
  @Input() sala: number = 0;
  @Input() bloco: string = "";
  @Input() data: string = "";
}
