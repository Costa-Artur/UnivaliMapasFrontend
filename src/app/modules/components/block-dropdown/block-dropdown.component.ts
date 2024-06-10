import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface Block {
  id: number;
  name: string;
}

@Component({
  selector: 'app-block-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './block-dropdown.component.html',
  styleUrl: './block-dropdown.component.scss'
})
export class BlockDropdownComponent {
  blocks: Block[] | undefined
  selectedBlock: Block | undefined

  ngOnInit() {
    this.blocks = [
    { id: 1, name: 'B1' },
    { id: 4, name: 'B4' },
    { id: 6, name: 'B6' },
    { id: 10, name: 'C3' },
    { id: 12, name: 'C5' },
    { id: 16, name: 'D4' },
    ]
  }

  onSelectedBlock() {
    console.log(this.selectedBlock?.name);
  }
}
