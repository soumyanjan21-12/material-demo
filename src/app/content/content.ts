import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-content',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  

}
