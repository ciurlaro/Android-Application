import {Injectable} from '@angular/core';
import {UseCase} from '../use-case';
import {UserEntity} from '../../entities/user-entity';
import {ArenaTournamentRepository} from '../../repositories/arena-tournament-repository';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentUserOrNullUseCase implements UseCase<UserEntity | null> {

  constructor(private repo: ArenaTournamentRepository) {
  }

  buildAction(): Observable<UserEntity | null> {
    return this.repo.getCurrentUser();
  }
}
