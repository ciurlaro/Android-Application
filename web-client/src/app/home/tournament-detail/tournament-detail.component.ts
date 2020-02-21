import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TournamentEntity} from '../../domain/entities/tournament-entity';
import {Subscription} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {GetTournamentByIdUseCase} from '../../domain/usecases/tournamnets/get-tournament-by-id-use-case.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit, OnDestroy {

  tournament: TournamentEntity = null;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private getTournamentByIdUseCase: GetTournamentByIdUseCase
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        map((id: string) => Number(id)),
        flatMap((id: number) => this.getTournamentByIdUseCase.buildAction(id))
      )
      .subscribe((tournament) => this.tournament = tournament);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
