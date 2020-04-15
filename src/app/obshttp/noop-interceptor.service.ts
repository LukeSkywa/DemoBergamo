import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoopInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Pippo': 'Pluto'
    });
    httpHeader = httpHeader.set('Response-Type', 'application/json');
    req = req.clone({
      headers: httpHeader
    });
    return next.handle(req).pipe(
      tap(response =>{
        console.log('qui gestisco la response');
      }, error =>{
        console.log('qui gestisco la response');
      })
    );
  }
}
