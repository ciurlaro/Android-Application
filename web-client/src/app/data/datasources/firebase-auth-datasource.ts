import {Observable} from 'rxjs';
import {AuthProviders} from '../../domain/entities/auth-providers';
import {Claims} from '../rawresponses/claims';
import {User} from 'firebase';

export abstract class FirebaseAuthDatasource {

  abstract authFlow: Observable<AuthStatus>;

  abstract updateUserEmail(email: string): Observable<boolean>;

  abstract updateUserPassword(password: string): Observable<boolean>;

  abstract updateUserProfileImage(image: string): Observable<boolean>;

  abstract updateUserNickname(nickname: string): Observable<boolean>;

  abstract loginWithEmailPassword(email: string, password: string): Observable<boolean>;

  abstract loginWithFacebookToken(token: string): Observable<boolean>;

  abstract loginWithGooglePopup(): Observable<boolean>;

  abstract logout(): Observable<boolean>;

  abstract createAccountWithEmailPassword(email: string, password: string): Observable<boolean>;

  abstract getCurrentUserAuthMethods(): Observable<AuthProviders[]>;

  abstract getAuthMethodsForEmail(email: string): Observable<AuthProviders[]>;

  abstract linkFacebookAuthProvider(token: string): Observable<boolean>;

  abstract linkGoogleAuthProviderWithPopup(): Observable<boolean>;

  abstract linkPasswordAuthProvider(password: string): Observable<boolean>;

  abstract reauthenticateWithPassword(password: string): Observable<boolean>;

  abstract reauthenticateWithGoogle(token: string): Observable<boolean>;

  abstract reauthenticateWithFacebook(token: string): Observable<boolean>;

  abstract getToken(): Observable<string>;

  abstract getCurrentAuthUser(): Observable<User | null>;

  abstract getCurrentUserClaims(): Observable<Claims>;

  abstract isCurrentUserEmailVerified(): Observable<boolean>;

}

export enum AuthStatus {
  AUTHENTICATED, UNAUTHENTICATED, STARTING_AUTH_FLOW
}
