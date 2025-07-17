import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Content } from '../content/content';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe, Content],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  user$!: Observable<any>;

  ngOnInit(): void {
    this.user$ = this.route.data.pipe(map((data) => data['user']));
  }
}
