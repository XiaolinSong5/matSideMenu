import { Component } from "@angular/core";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: "locations",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <h1>Locations Page</h1>
  <router-outlet></router-outlet>`,
  styles: [],
})
export class LocationsComponent { }
