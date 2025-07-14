import { Component, inject } from '@angular/core';
import { UserService } from '../users'
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
   userService = inject(UserService)
   users$ = this.userService.getUsers()
   
   constructor() {
    this.users$.subscribe((data)=>{
      console.log(data)
    })
   }
}
