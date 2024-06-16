import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BlocoPopulatedInterface, SalaPopulatedInterface } from '../../interfaces/bloco.interface';
import { AulasService } from '../../services/aulas.service';


@Component({
  selector: 'app-class-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './class-dropdown.component.html',
  styleUrl: './class-dropdown.component.scss'
})
export class ClassDropdownComponent implements OnInit {

  classes: SalaPopulatedInterface[] = [];
  selectedClass: SalaPopulatedInterface | undefined;

  blocks: BlocoPopulatedInterface[] = []
  selectedBlock: BlocoPopulatedInterface | undefined

  @Output() classEmmiter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private service: AulasService) { }

  ngOnInit(): void {
    this.service.getBlocosWithSalas().subscribe((data) => {
      this.blocks = data

      for (let i = 0; i < this.blocks.length; i++) {
        this.selectedBlock = this.blocks[i]
        for (let j = 0; j < this.selectedBlock.salas.length; j++) {
          this.classes.push(this.selectedBlock.salas[j])
        }
      }
    });
  }

  onSelectedClass() {
    if(this.selectedClass){
      this.classEmmiter.emit(this.selectedClass.number.toString())
    }
  }
}
