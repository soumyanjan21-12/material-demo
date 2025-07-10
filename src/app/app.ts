import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Circles } from "./circles/circles";
import { JapanFlag } from "./japan-flag/japan-flag";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  imports: [NavBar, Circles],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  http = inject(HttpClient)
  protected title = 'material-demo';
  constructor() {
    this.http.get(environment.url).subscribe()
  }
}
