import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GetAllGamesUseCase} from '../../domain/usecases/games/get-all-games-use-case.service';
import {Subscription} from 'rxjs';
import {GameEntity} from '../../domain/entities/game-entity';
import {CreateTournamentUseCase} from '../../domain/usecases/tournamnets/create-tournament-use-case.service';

export class CreateTournamentUseCaseParams {
  constructor(
    public title: string,
    public description: string,
    public players: number,
    public game: GameEntity
  ) {
  }
}

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit, OnDestroy {

  tournamentTitleControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3)
  ]);
  tournamentDescriptionControl = new FormControl('');
  tournamentGameControl = new FormControl(null, [Validators.required]);
  tournamentPlayersControl = new FormControl(null, [Validators.required]);

  availableGames: GameEntity[] = [];
  createTournamentFormGroup: FormGroup;
  playerNumbers = [8, 16, 32];
  private subs: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateTournamentComponent>,
    private getAllGamesUseCase: GetAllGamesUseCase,
    formBuilder: FormBuilder,
    private createTournamentUseCase: CreateTournamentUseCase
  ) {
    this.createTournamentFormGroup = formBuilder.group({
      title: this.tournamentTitleControl,
      description: this.tournamentDescriptionControl,
      players: this.tournamentPlayersControl,
      game: this.tournamentGameControl
    });
  }

  ngOnInit(): void {
    this.subs.push(
      this.getAllGamesUseCase.buildAction()
        .subscribe(games => {
          return this.availableGames = games;
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  submit() {
    const params = new CreateTournamentUseCaseParams(
      this.tournamentTitleControl.value,
      this.tournamentDescriptionControl.value ? this.tournamentDescriptionControl.value : '',
      this.tournamentPlayersControl.value,
      this.tournamentGameControl.value
    );
    this.subs.push(
      this.createTournamentUseCase.buildAction(params)
        .subscribe((tournament) => this.dialogRef.close(tournament))
    );
  }
}
