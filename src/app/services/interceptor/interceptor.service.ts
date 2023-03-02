import { LocalStorageService } from './../localStorage/local-storage.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private readonly localStorageService: LocalStorageService
  ) { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    if( !this.localStorageService.getData('token')){
      return next.handle(req);
    }

    return next.handle(req);
  }
}
