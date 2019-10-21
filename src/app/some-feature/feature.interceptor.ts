import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class FeatureInterceptor implements HttpInterceptor {
  constructor() {
    console.log('feature interceptor is created');
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Feature Interceptor added Authorization header');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer SOME_MOCK_TOKEN_AS_FOR_FEATURE`
      }
    });
    return next.handle(request);
  }
}
