import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-content',
  imports: [MatButtonModule, MatCardModule, MatDividerModule],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  @Input() img: string = '';
  @Input() firstName: string = '';
  @Input() lastName: string = '';
}
