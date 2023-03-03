import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot,  Router } from '@angular/router';
import { AuthEventService } from '@services/events/auth/auth-event.service';
import { Observable  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authEventService: AuthEventService,
    private readonly router: Router ) {}

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean >   {

      return this.authEventService
      .currentLogin$
      .pipe(
        take(1),
        map( (data:boolean) => {
          if(data) return true;
          this.router.navigate(['login']);
          return false;
        } )
      );


  }
}
