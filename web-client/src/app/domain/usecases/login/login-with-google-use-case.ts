import {UseCase} from '../use-case';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ArenaTournamentRepository} from '../../repositories/arena-tournament-repository';

@Injectable({
  providedIn: 'root'
})
export class LoginWithGoogleUseCase implements UseCase<boolean> {

  constructor(
    private repo: ArenaTournamentRepository
  ) {
  }

  buildAction(): Observable<boolean> {
    return this.repo.loginWithGooglePopup();
  }
}
