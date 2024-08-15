import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _alertService: AlertService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: Error) => {
        console.error(error);

        this._alertService.error('Error', error.message);

        return throwError(() => error);
      })
    );
  }
}