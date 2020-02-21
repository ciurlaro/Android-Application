import {RepoUseCase} from '../use-case';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkWithGoogleProviderUseCase extends RepoUseCase<boolean> {

  buildAction(): Observable<boolean> {
    return this.repo.loginWithGooglePopup();
  }
}
