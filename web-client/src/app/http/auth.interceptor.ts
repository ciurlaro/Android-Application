import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {GetAuthTokenOrNullUseCase} from '../domain/usecases/login/get-auth-token-or-null-usecase';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private getAuthTokenOrNullUseCase: GetAuthTokenOrNullUseCase) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.getAuthTokenOrNullUseCase.buildAction().pipe(
      flatMap((token: string | null) => {
        if (token) {
          return next.handle(request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          }));
        } else {
          return next.handle(request);
        }
      })
    );
  }

}
