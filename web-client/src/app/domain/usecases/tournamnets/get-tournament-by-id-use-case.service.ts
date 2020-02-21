import {Injectable} from '@angular/core';
import {RepoUseCaseWithParams} from '../use-case';
import {TournamentEntity} from '../../entities/tournament-entity';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTournamentByIdUseCase extends RepoUseCaseWithParams<number, TournamentEntity> {

  buildAction(tournamentId: number): Observable<TournamentEntity> {
    return this.repo.getTournamentById(tournamentId);
  }
}
