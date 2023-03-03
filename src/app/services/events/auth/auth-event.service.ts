import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEventService {

  private eventLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly currentLogin$: Observable<boolean> = this.eventLogin.asObservable();

  constructor() { }


  setCurrentLogin(state: boolean): void {
    this.eventLogin.next(state);
  }

}
