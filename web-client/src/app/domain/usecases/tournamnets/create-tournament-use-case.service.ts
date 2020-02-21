import {Injectable} from '@angular/core';
import {UseCaseWithParams} from '../use-case';
import {TournamentEntity} from '../../entities/tournament-entity';
import {ArenaTournamentRepository} from '../../repositories/arena-tournament-repository';
import {GetCurrentUserOrNullUseCase} from '../use/get-current-user-or-null-usecase';
import {Observable} from 'rxjs';
import {filter, flatMap} from 'rxjs/operators';
import {CreateTournamentUseCaseParams} from '../../../home/create-tournament/create-tournament.component';

@Injectable({
  providedIn: 'root'
})
export class CreateTournamentUseCase implements UseCaseWithParams<CreateTournamentUseCaseParams, TournamentEntity> {

  constructor(
    private repo: ArenaTournamentRepository,
    private getCurrentUserOrNullUseCase: GetCurrentUserOrNullUseCase
  ) {
  }

  buildAction(params: CreateTournamentUseCaseParams): Observable<TournamentEntity> {
    return this.getCurrentUserOrNullUseCase.buildAction()
      .pipe(
        filter(value => !!value),
        flatMap((currentUser) => this.repo.createTournament(
          params.players,
          params.title,
          params.description,
          '',
          currentUser,
          params.game
        ))
      );
  }

}
