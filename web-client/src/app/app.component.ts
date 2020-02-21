import {Component, OnDestroy, OnInit} from '@angular/core';
import {EMPTY, Observable, Subscription} from 'rxjs';
import {SearchTournamentFlowService} from './services/search-tournament-flow.service';
import {ArenaTournamentRepository} from './domain/repositories/arena-tournament-repository';
import {GameEntity} from './domain/entities/game-entity';
import {UserEntity} from './domain/entities/user-entity';
import {TournamentEntity} from './domain/entities/tournament-entity';
import {RegistrationEntity} from './domain/entities/registration-entity';
import {Router} from '@angular/router';
import {AuthStatus} from './data/datasources/firebase-auth-datasource';
import {flatMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {GetAllGamesUseCase} from './domain/usecases/games/get-all-games-use-case.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showLoginStuff = false;
  private sub: Subscription;
  showLoadingLoginBar = false;

  constructor(
    private searchTournamentFlowService: SearchTournamentFlowService,
    private repository: ArenaTournamentRepository,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    getAllGamesUseCase: GetAllGamesUseCase
  ) {

    const add = (iconName: string, iconUrl?: string) => {
      matIconRegistry.addSvgIcon(
        iconName,
        domSanitizer.bypassSecurityTrustResourceUrl(
          iconUrl ? iconUrl : `assets/icons/${iconName}.svg`
        )
      );
    };

    ['google', 'facebook', 'crown-outline']
      .forEach(value => add(value));

    getAllGamesUseCase.buildAction()
      .subscribe((games) => games.forEach(game => add(game.name, game.iconSvg)));

  }

  ngOnInit(): void {
    this.sub = this.repository.authFlow
      .pipe(
        flatMap((authStatus) => {
          switch (authStatus) {
            case AuthStatus.AUTHENTICATED: {
              this.showLoadingLoginBar = false;
              this.showLoginStuff = true;
              return EMPTY;
            }
            case AuthStatus.UNAUTHENTICATED: {
              this.showLoadingLoginBar = false;
              this.showLoginStuff = false;
              return fromPromise(this.router.navigateByUrl('login'));
            }
            case AuthStatus.STARTING_AUTH_FLOW: {
              this.showLoadingLoginBar = true;
              return EMPTY;
            }
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
