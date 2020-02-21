import {Injectable} from '@angular/core';
import {RepoUseCase} from '../use-case';
import {GameEntity} from '../../entities/game-entity';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllGamesUseCase extends RepoUseCase<GameEntity[]> {
  buildAction(): Observable<GameEntity[]> {
    return this.repo.getAllGames(0);
  }
}
