import {Component, Input, OnInit} from '@angular/core';
import {SearchTournamentFlowService} from '../services/search-tournament-flow.service';
import {ArenaTournamentRepository} from '../domain/repositories/arena-tournament-repository';
import {flatMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {IsCurrentUserSubscriberUseCase} from '../domain/usecases/user/is-current-user-subscriber-use-case.service';
import {EMPTY, Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CreateTournamentComponent} from '../home/create-tournament/create-tournament.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() isLoggedIn;

  isCurrentUserSubscriber = false;
  private sub: Subscription;

  constructor(
    private searchTournamentFlowService: SearchTournamentFlowService,
    private repo: ArenaTournamentRepository,
    private router: Router,
    private isCurrentUserSubscriberUseCase: IsCurrentUserSubscriberUseCase,
    private dialog: MatDialog
  ) {
  }

  onSearchTournamentTextChanged(text: string) {
    this.searchTournamentFlowService.publish(text);
  }

  ngOnInit(): void {
    this.sub = this.isCurrentUserSubscriberUseCase.buildAction()
      .subscribe((isCurrentUserSubscriber) => {
        return this.isCurrentUserSubscriber = isCurrentUserSubscriber ? isCurrentUserSubscriber : false;
      });
  }

  logout() {
    this.sub.unsubscribe();
    this.repo.logout()
      .pipe(
        flatMap((loggedOut) => loggedOut ? this.router.navigateByUrl('login') : EMPTY)
      )
      .subscribe();
  }

  createTournament() {
    this.dialog.open(CreateTournamentComponent, {
      width: '350px'
    });
  }
}
