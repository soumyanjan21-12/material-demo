import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnInit{
  route = inject(ActivatedRoute)
  userService = inject(UserService)
  user$!: Observable<any>

  ngOnInit(): void {
    this.user$ = this.route.data.pipe(map((data=>data['user'])))
  }
}
