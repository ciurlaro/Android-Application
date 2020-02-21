import {Injectable} from '@angular/core';
import {RepoUseCaseWithParams} from '../use-case';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkWithEmailProviderUseCase extends RepoUseCaseWithParams<string, boolean> {
  buildAction(password: string): Observable<boolean> {
    return this.repo.linkPasswordAuthProvider(password);
  }
}
