import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClassDropdownComponent } from '../../components/class-dropdown/class-dropdown.component';
import { BlockDropdownComponent } from '../../components/block-dropdown/block-dropdown.component';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mapa',
    standalone: true,
    templateUrl: './mapa.component.html',
    styleUrl: './mapa.component.scss',
    imports: [FormsModule, CommonModule, ClassDropdownComponent, BlockDropdownComponent, SidebarComponent]
})
export class MapaComponent {
    selectedClass: string | undefined
    selectedBlock: string | undefined

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.selectedClass = params['sala']
            this.selectedBlock = params['bloco']
        })
    }

    onClassChanged(classNum: string) {
        this.selectedClass = classNum
    }

    onBlockChanged(blockName: string) {
        this.selectedBlock = blockName
    }
}

    

