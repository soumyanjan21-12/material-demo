import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./users";

@Injectable({ providedIn: 'root' })
export class userResolverResolver implements Resolve<any> {
  constructor(private service: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> {
    return this.service.getUser((Number(route.paramMap.get('id')))||0)
  }
}