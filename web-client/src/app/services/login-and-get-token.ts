import {Observable} from 'rxjs';

export interface OAuthTokenProvider {
  loginAndGetToken(): Observable<string>;
}
