import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule,MatIconModule,MatBadgeModule,MatMenuModule,MatButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {

}
