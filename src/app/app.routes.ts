import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Circles } from './circles/circles';
import { userResolverResolver } from './user-resolver-resolver';
import { Users } from './users/users';
import { User } from './user/user';

export const routes: Routes = [
    {path:'', component: Users },
    {path:'user/:id', component:User, resolve:{
        user:userResolverResolver
    }}
    
];
