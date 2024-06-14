import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface Class {
  id: number;
  number: number;
}

@Component({
  selector: 'app-class-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './class-dropdown.component.html',
  styleUrl: './class-dropdown.component.scss'
})
export class ClassDropdownComponent implements OnInit {
  classes: Class[] | undefined
  selectedClass: Class | undefined

  @Output() classEmmiter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.classes = [
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
    ]
  }

  onSelectedClass() {
    if(this.selectedClass){
      this.classEmmiter.emit(this.selectedClass.number.toString())
    }
  }
}
