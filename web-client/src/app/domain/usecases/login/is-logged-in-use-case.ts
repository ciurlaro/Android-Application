import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UseCase} from '../use-case';
import {ArenaTournamentRepository} from '../../repositories/arena-tournament-repository';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInUseCase implements UseCase<boolean> {

  constructor(private readonly repo: ArenaTournamentRepository) {
  }

  buildAction(): Observable<boolean> {
    return this.repo.getCurrentUser()
      .pipe(map((value) => !!value));
  }
}

