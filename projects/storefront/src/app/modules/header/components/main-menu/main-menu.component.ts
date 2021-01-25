import { Component, HostBinding } from '@angular/core';
import { mainMenu } from '../../../../../data/header-main-menu';
import { MainMenuLink } from '../../../../interfaces/main-menu-link';
import { HeaderService } from '../../../../services/header.service';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
    items: MainMenuLink[] = mainMenu;

    hoveredItem;

    @HostBinding('class.main-menu') classMainMenu = true;

    constructor(
        public header: HeaderService,
    ) {}

    onItemEnter(item: any): void {
        this.hoveredItem = item;
    }

    onItemLeave(item: any): void {
        if ( this.hoveredItem === item ) {
            this.hoveredItem = null;
        }
    }

    onItemClick(): void {
        this.hoveredItem = null;
    }
}
