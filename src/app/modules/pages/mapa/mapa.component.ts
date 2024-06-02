import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClassDropdownComponent } from '../../components/class-dropdown/class-dropdown.component';
import { BlockDropdownComponent } from '../../components/block-dropdown/block-dropdown.component';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [FormsModule, CommonModule, ClassDropdownComponent, BlockDropdownComponent],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {

}

    

