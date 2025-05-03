import { Routes } from '@angular/router';
import {LocationsComponent} from './pages/locations.component';
import {AboutComponent} from './pages/about.component';
import {DASH} from '@angular/cdk/keycodes';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [ {
  path: "",
  pathMatch: 'full',
  redirectTo: 'dashboard'
},
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "locations",
    component: LocationsComponent,
  }];

