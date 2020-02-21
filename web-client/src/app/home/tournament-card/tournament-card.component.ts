import {Component, Input} from '@angular/core';
import {TournamentEntity} from '../../domain/entities/tournament-entity';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent {

  @Input()
  tournament: TournamentEntity;
  hoover = '';

  constructor() {
  }

  getGameIconStyle(): { [key: string]: any } {
    return {
      'background-image': `url('${this.tournament.game.icon}')`,
      'background-size': 'cover'
    };
  }
}
