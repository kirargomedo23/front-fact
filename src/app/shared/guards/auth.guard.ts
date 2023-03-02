import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
    CanActivate,
    Router, RouterStateSnapshot, UrlTree } from '@angular/router';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router ) {}

  canActivate(  next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean | UrlTree {
    return true;
  }
}
