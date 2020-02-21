import {AuthStatus, FirebaseAuthDatasource} from '../../data/datasources/firebase-auth-datasource';
import {Observable, of, Subject} from 'rxjs';
import {AuthProviders} from '../../domain/entities/auth-providers';
import {AngularFireAuth} from '@angular/fire/auth';
import {catchError, first, flatMap, map} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {Injectable} from '@angular/core';
import {Claims} from '../../data/rawresponses/claims';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import EmailAuthProvider = firebase.auth.EmailAuthProvider;

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthDatasourceImplementation extends FirebaseAuthDatasource {

  private authSubject = new Subject<AuthStatus>();

  authFlow = this.authSubject.asObservable();

  constructor(private firebaseAuth: AngularFireAuth) {
    super();
    firebaseAuth.authState.subscribe((user) => this.authSubject.next(user ? AuthStatus.AUTHENTICATED : AuthStatus.UNAUTHENTICATED));
  }

  createAccountWithEmailPassword(email: string, password: string): Observable<boolean> {
    return fromPromise(this.firebaseAuth.createUserWithEmailAndPassword(email, password))
      .pipe(map((_) => true));
  }

  getAuthMethodsForEmail(email: string): Observable<AuthProviders[]> {
    return fromPromise(this.firebaseAuth.fetchSignInMethodsForEmail(email))
      .pipe(map((providerStrings) => {
        return providerStrings.map(providerString => {
          switch (providerString) {
            case GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD:
              return AuthProviders.GOOGLE;
            case FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD:
              return AuthProviders.FACEBOOK;
            case EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD:
              return AuthProviders.EMAIL_PASSWORD;
          }
        });
      }));
  }

  getCurrentAuthUser(): Observable<User | null> {
    return this.firebaseAuth.authState
      .pipe(first());
  }

  getCurrentUserAuthMethods(): Observable<AuthProviders[]> {
    return this.userOrError().pipe(flatMap((user) => {
      return this.getAuthMethodsForEmail(user.email);
    }));
  }

  getCurrentUserClaims(): Observable<Claims> {
    return this.userOrError().pipe(
      flatMap((user) => fromPromise(user.getIdTokenResult(true))),
      map((value) => {
        return {isSubscriber: value.claims.isSubscriber ? Boolean(value.claims.isSubscriber) : false};
      })
    );
  }

  getToken(): Observable<string> {
    return this.userOrError().pipe(
      flatMap((user) => fromPromise(user.getIdTokenResult(true))),
      map((tokenResult) => tokenResult.token)
    );
  }

  isCurrentUserEmailVerified(): Observable<boolean> {
    return this.userOrError().pipe(
      map(user => user.emailVerified)
    );
  }

  linkFacebookAuthProvider(token: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.linkWithCredential(FacebookAuthProvider.credential(token)))),
      map((_) => true),
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    );
  }

  linkGoogleAuthProviderWithPopup(): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.linkWithPopup(new GoogleAuthProvider()))),
      map((_) => true),
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    );
  }

  linkPasswordAuthProvider(password: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.linkWithCredential(EmailAuthProvider.credential(user.email, password)))),
      map((_) => true),
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    );
  }

  loginWithEmailPassword(email: string, password: string): Observable<boolean> {
    this.authSubject.next(AuthStatus.STARTING_AUTH_FLOW);
    return fromPromise(this.firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)).pipe(
      flatMap(() => fromPromise(this.firebaseAuth.signInWithEmailAndPassword(email, password))),
      map((_) => true),
      catchError((err) => {
        this.authSubject.next(AuthStatus.UNAUTHENTICATED);
        console.log(err);
        return of(false);
      })
    );
  }

  loginWithGooglePopup(): Observable<boolean> {
    this.authSubject.next(AuthStatus.STARTING_AUTH_FLOW);
    return fromPromise(this.firebaseAuth.signInWithPopup(new GoogleAuthProvider())).pipe(
      map((_) => true),
      catchError(err => {
        this.authSubject.next(AuthStatus.UNAUTHENTICATED);
        console.log(err);
        return of(false);
      })
    );
  }

  loginWithFacebookToken(token: string): Observable<boolean> {
    this.authSubject.next(AuthStatus.STARTING_AUTH_FLOW);
    return fromPromise(this.firebaseAuth.signInWithCredential(FacebookAuthProvider.credential(token))).pipe(
      map((_) => true),
      catchError((err) => {
        this.authSubject.next(AuthStatus.UNAUTHENTICATED);
        console.log(err);
        return of(false);
      })
    );
  }

  logout(): Observable<boolean> {
    return fromPromise(this.firebaseAuth.signOut()).pipe(
      map(_ => true),
      catchError(err => {
        console.error(err);
        return of(false);
      })
    );
  }

  reauthenticateWithGoogle(token: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => user.reauthenticateWithCredential(GoogleAuthProvider.credential(token))),
      map(_ => true)
    );
  }

  reauthenticateWithFacebook(token: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => user.reauthenticateWithCredential(FacebookAuthProvider.credential(token))),
      map(_ => true)
    );
  }

  reauthenticateWithPassword(password: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => user.reauthenticateWithCredential(EmailAuthProvider.credential(user.email, password))),
      map(_ => true)
    );
  }

  updateUserEmail(email: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.updateEmail(email))),
      map(_ => true)
    );
  }

  updateUserNickname(nickname: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.updateProfile({displayName: nickname}))),
      map(_ => true)
    );
  }

  updateUserPassword(password: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.updatePassword(password))),
      map(_ => true)
    );
  }

  updateUserProfileImage(image: string): Observable<boolean> {
    return this.userOrError().pipe(
      flatMap(user => fromPromise(user.updateProfile({photoURL: image}))),
      map(_ => true)
    );
  }

  private userOrError(): Observable<User> {
    return fromPromise(this.firebaseAuth.currentUser)
      .pipe(map((user) => {
        // console.log(`User is: ${JSON.stringify(user)}`);
        if (user) {
          return user;
        } else {
          throw new Error('not authenticated');
        }
      }));
  }

}
