import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-circles',
  imports: [],
  templateUrl: './circles.html',
  styleUrl: './circles.scss'
})
export class Circles {
  activatedRoue = inject(ActivatedRoute)
  constructor() {
    console.log(this.activatedRoue.snapshot.data)
  }

}
