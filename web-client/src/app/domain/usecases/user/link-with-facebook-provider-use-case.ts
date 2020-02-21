import {Injectable} from '@angular/core';
import {RepoUseCaseWithParams} from '../use-case';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkWithFacebookProviderUseCase extends RepoUseCaseWithParams<string, boolean> {

  buildAction(token: string): Observable<boolean> {
    return this.repo.linkFacebookProvider(token);
  }
}
