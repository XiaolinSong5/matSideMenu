import {Component, computed, Input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import {MenuItemComponent} from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
  subItems?: MenuItem[];
}
@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, MenuItemComponent],
  standalone: true,
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
  this.sideNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'video_library',
      label: 'locations',
      route: 'locations',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos'
        },
        {
          icon: 'playlist_play',
          label: 'playlists',
          route: 'playlists'
        }
      ]
    },
    {
      icon: 'post_added',
      label: 'about',
      route: 'about'
    }
    ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32': '100');
}
