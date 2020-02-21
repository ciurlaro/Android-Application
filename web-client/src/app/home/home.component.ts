import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {SearchTournamentFlowService} from '../services/search-tournament-flow.service';
import {interval, Observable, of, Subscription} from 'rxjs';
import {TournamentEntity} from '../domain/entities/tournament-entity';
import {UseCase, UseCaseWithParams} from '../domain/usecases/use-case';
import {ArenaTournamentRepository} from '../domain/repositories/arena-tournament-repository';
import {debounce, flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetShowcaseTournaments implements UseCase<TournamentEntity[]> {
  constructor(private repo: ArenaTournamentRepository) {
  }

  buildAction(): Observable<TournamentEntity[]> {
    return this.repo.getShowcaseTournaments(0);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SearchTournamentsUseCase implements UseCaseWithParams<string, TournamentEntity[]> {
  constructor(private repo: ArenaTournamentRepository) {
  }

  buildAction(tournamentName: string): Observable<TournamentEntity[]> {
    return this.repo.searchTournamentsByName(tournamentName, 0);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private searchSub: Subscription;
  searchedTournaments: TournamentEntity[] = [];
  showcaseTournaments: TournamentEntity[] = [];
  private showcaseSub: Subscription;

  constructor(
    private searchTournamentFlowService: SearchTournamentFlowService,
    private getShowCaseTournamentsUseCase: GetShowcaseTournaments,
    private searchTournamentsUseCase: SearchTournamentsUseCase
  ) {
  }

  ngOnInit(): void {
    this.searchSub = this.searchTournamentFlowService.getFlow()
      .pipe(
        debounce(() => interval(500)),
        flatMap((searchedText: string) => searchedText.length === 0 ? of([]) : this.searchTournamentsUseCase.buildAction(searchedText))
      )
      .subscribe((tournaments: TournamentEntity[]) => this.searchedTournaments = tournaments);
    this.showcaseSub = this.getShowCaseTournamentsUseCase.buildAction()
      .subscribe((tournaments: TournamentEntity[]) => this.showcaseTournaments = tournaments);
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
    this.showcaseSub.unsubscribe();
  }

}
