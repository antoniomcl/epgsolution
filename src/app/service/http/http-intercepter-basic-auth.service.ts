import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { USERNAME } from 'src/app/app.constants';
import { PASSWORD } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler){

    let basicAuthenticatioString = 'Basic ' + window.btoa(USERNAME + ':' + PASSWORD);
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthenticatioString
        }
      })
    return next.handle(request);
  }
}
