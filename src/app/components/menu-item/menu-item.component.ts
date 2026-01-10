import {Component, input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MenuItem} from '../custom-sidenav/custom-sidenav.component';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-menu-item',
  imports: [MatListModule, RouterModule, MatIconModule],
  standalone: true,
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
 item = input.required<MenuItem>();
 collapse = input(false);
 nestedMenuOpen = signal(false);

  toggleNested() {
    if (!this.item().subItems) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
