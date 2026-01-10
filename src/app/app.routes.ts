import { Routes } from '@angular/router';
import {LocationsComponent} from './pages/locations.component';
import {AboutComponent} from './pages/about.component';
import {DASH} from '@angular/cdk/keycodes';
import {VideoComponent} from './pages/content/video/video.component';
import {PlaylistsComponent} from './pages/content/playlists/playlists.component';

export const routes: Routes = [ {
  path: "",
  pathMatch: 'full',
  redirectTo: 'dashboard'
},
  {
    path: "locations",
    component: LocationsComponent,
    children: [
      {
        path: "videos",
        component: VideoComponent,
      },
      {
        path: "playlists",
        component: PlaylistsComponent,
      },
    ]
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

