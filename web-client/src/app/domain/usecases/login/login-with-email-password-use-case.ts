import {UseCaseWithParams} from '../use-case';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ArenaTournamentRepository} from '../../repositories/arena-tournament-repository';

export interface LoginWithEmailPasswordUseCaseParams {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginWithEmailPasswordUseCase implements UseCaseWithParams<LoginWithEmailPasswordUseCaseParams, boolean> {

  constructor(private repo: ArenaTournamentRepository) {
  }

  buildAction(params: LoginWithEmailPasswordUseCaseParams): Observable<boolean> {
    return this.repo.loginWithEmailAndPassword(params.email, params.password);
  }

}
