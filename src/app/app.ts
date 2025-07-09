import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [NavBar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'material-demo';
}
