import {UserEntity} from './user-entity';
import {TournamentEntity} from './tournament-entity';
import {GameEntity} from './game-entity';

export class RegistrationEntity {

  constructor(
    public readonly user: UserEntity,
    public readonly tournament: TournamentEntity,
    public readonly game: GameEntity,
    public readonly id?: number,
    public readonly outcome?: string
  ) {}
}
