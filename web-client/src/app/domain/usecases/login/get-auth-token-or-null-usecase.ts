import {Injectable} from '@angular/core';
import {UseCase} from '../use-case';
import {IsLoggedInUseCase} from './is-logged-in-use-case';
import {FirebaseAuthDatasource} from '../../../data/datasources/firebase-auth-datasource';
import {Observable, of} from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAuthTokenOrNullUseCase implements UseCase<string> {

  constructor(
    private isLoggedInUseCase: IsLoggedInUseCase,
    private firebaseAuthDs: FirebaseAuthDatasource
  ) {
  }


  buildAction(): Observable<string> {
    return this.isLoggedInUseCase.buildAction().pipe(
      flatMap(isLoggedIn => isLoggedIn ? this.firebaseAuthDs.getToken() : of(null))
    );
  }
}
