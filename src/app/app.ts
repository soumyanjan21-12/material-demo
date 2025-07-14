import { Component, inject, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router, RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Circles } from './circles/circles';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { MatProgressBar } from '@angular/material/progress-bar';
import { filter, mapTo, merge, mergeAll, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavBar, Circles, RouterOutlet, MatProgressBar, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  http = inject(HttpClient);
  router = inject(Router);

  isLoding$!: Observable<boolean>;
  showLoadingEvent!: Observable<boolean>;
  hideLoadingEvent!: Observable<boolean>;

  protected title = 'material-demo';
  constructor() {
    console.log(environment.url);
  }

  ngOnInit(): void {
    this.showLoadingEvent = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );
    this.hideLoadingEvent = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );

    this.isLoding$ = merge(this.hideLoadingEvent,this.showLoadingEvent)
  }
}
