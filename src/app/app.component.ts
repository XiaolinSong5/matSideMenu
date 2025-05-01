import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {SidenavComponent} from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
  CommonModule,
  MatDialogModule,
  MatIconModule,
  RouterModule,
  MatCardModule,
MatSidenavModule,
    SidenavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
