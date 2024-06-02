import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Block {
  id: number;
  name: string;
}

@Component({
  selector: 'app-block-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-dropdown.component.html',
  styleUrl: './block-dropdown.component.scss'
})
export class BlockDropdownComponent {
  blocks: Block[] = [
    { id: 1, name: 'B1' },
    { id: 2, name: 'B2' },
    { id: 3, name: 'B3' },
    { id: 4, name: 'B4' },
    { id: 5, name: 'B5' },
    { id: 6, name: 'B6' },
    { id: 7, name: 'B7' },
    { id: 8, name: 'C1' },
    { id: 9, name: 'C2' },
    { id: 10, name: 'C3' },
    { id: 11, name: 'C4' },
    { id: 12, name: 'C5' },
    { id: 13, name: 'D1' },
    { id: 14, name: 'D2' },
    { id: 15, name: 'D3' },
    { id: 16, name: 'D4' },
    { id: 17, name: 'D5' },
    { id: 18, name: 'D6' },
    { id: 19, name: 'D7' },
    { id: 20, name: 'D8' },
    { id: 21, name: 'D9' },
    { id: 22, name: 'D10' },
    { id: 23, name: 'E1' },
    { id: 24, name: 'E2' },
    { id: 25, name: 'E3' },
    { id: 26, name: 'F1' }, 
    { id: 27, name: 'F2' }, 
    { id: 28, name: 'F3' }, 
    { id: 29, name: 'F4' }, 
    { id: 30, name: 'F5' }, 
    { id: 31, name: 'F6' }, 
    { id: 32, name: 'F7' }
  ];

  selectedBlock: Block | undefined;
}
