import { Routes } from '@angular/router';
import {LocationsComponent} from './pages/locations.component';
import {AboutComponent} from './pages/about.component';

export const routes: Routes = [ {
  path: "about",
  component: AboutComponent,
},
  {
    path: "locations",
    component: LocationsComponent,
  },

  { path: "**", redirectTo: "about" },];

