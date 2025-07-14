import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)

  getUsers() {
     return this.http.get('https://dummyjson.com/users').pipe(map(((data:any)=>data.users)))
  }
  
  getUser(id:number):Observable<any>{
     return this.http.get('https://dummyjson.com/users/'+id).pipe(shareReplay())
  }
 
}
