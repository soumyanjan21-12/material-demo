import { Component, inject } from '@angular/core';
import { UserService } from '../users';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, RouterLink, MatTableModule, MatButtonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  userService = inject(UserService);
  displayedColumns: string[] = ['id', 'name', 'go to'];
  users$ = this.userService.getUsers();

  constructor() {
    this.users$.subscribe((data) => {
      console.log(data);
    });
  }
}
