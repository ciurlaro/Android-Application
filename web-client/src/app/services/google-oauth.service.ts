import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {fromPromise} from 'rxjs/internal-compatibility';
import * as firebase from 'firebase';
import {catchError, map} from 'rxjs/operators';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class GoogleOAuthService {

  constructor(private fAuth: AngularFireAuth) {
  }

  login(): Observable<boolean> {
    return fromPromise(this.fAuth.signInWithPopup(new GoogleAuthProvider()))
      .pipe(
        catchError(err => {
          console.error(err);
          return of(null);
        }),
        map((credentials: firebase.auth.UserCredential | null) => !!credentials),
      );
  }
}
