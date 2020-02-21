import {Injectable} from '@angular/core';
import * as Fb from 'fb-sdk-wrapper';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map} from 'rxjs/operators';
import {OAuthTokenProvider} from './login-and-get-token';
import {facebookAppId} from '../../environments/environment.common';

@Injectable({
  providedIn: 'root'
})
export class FacebookOAuthService implements OAuthTokenProvider {

  constructor() {
    Fb.load().then(() => {
      Fb.init({
        appId: facebookAppId
      });
    });
  }

  loginAndGetToken(): Observable<string> {
    return fromPromise(Fb.login()).pipe(
      map((value: any) => value.authResponse.accessToken as string)
    );
  }

}
