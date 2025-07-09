import { Component } from '@angular/core';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { Content } from '../content/content';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, Content],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
