import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Block {
  id: number;
  name: string;
}

interface Class {
  id: number;
  number: number;
}

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {
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

  classes: Class[] = [
    { id: 1, number: 101 },
    { id: 2, number: 102 },
    { id: 3, number: 103 },
    { id: 4, number: 104 },
    { id: 5, number: 105 },
    { id: 6, number: 106 },
    { id: 7, number: 107 },
    { id: 8, number: 108 },
    { id: 9, number: 109 },
    { id: 10, number: 110 },
    { id: 11, number: 201 },
    { id: 12, number: 202 },
    { id: 13, number: 203 },
    { id: 14, number: 204 },
    { id: 15, number: 205 },
    { id: 16, number: 206 },
    { id: 17, number: 207 },
    { id: 18, number: 208 },
    { id: 19, number: 209 },
    { id: 20, number: 210 },
  ];

  selectedClass: Class | undefined;
}

    

