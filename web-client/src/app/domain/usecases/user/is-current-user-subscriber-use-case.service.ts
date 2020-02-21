import {Injectable} from '@angular/core';
import {RepoUseCase} from '../use-case';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsCurrentUserSubscriberUseCase extends RepoUseCase<boolean | null> {
  buildAction(): Observable<boolean | null> {
    return this.repo.getCurrentUser()
      .pipe(map((user) => user ? user.isSubscriber : null));
  }
}
