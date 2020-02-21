import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {IsLoggedInUseCase} from '../domain/usecases/login/is-logged-in-use-case';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private isLoggedInUseCase: IsLoggedInUseCase,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedInUseCase.buildAction().pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return this.router.parseUrl('home');
        } else {
          return true;
        }
      })
    );
  }

}
