import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisciplinaComponent } from '../../components/disciplina/disciplina.component';
import { BlockDropdownComponent } from '../../components/block-dropdown/block-dropdown.component';
import { ClassDropdownComponent } from '../../components/class-dropdown/class-dropdown.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
    selector: 'app-disciplinas',
    standalone: true,
    templateUrl: './disciplinas.component.html',
    styleUrl: './disciplinas.component.scss',
    imports: [CommonModule, DisciplinaComponent, BlockDropdownComponent, ClassDropdownComponent, SidebarComponent]
})
export class DisciplinasComponent {

}
