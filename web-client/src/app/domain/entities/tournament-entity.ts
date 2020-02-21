import {UserEntity} from './user-entity';
import {GameEntity} from './game-entity';

export class TournamentEntity {

  constructor(
    public readonly id: number,
    public readonly playersNumber: number,
    public readonly title: string,
    public readonly description: string,
    public readonly mode: string,
    public readonly admin: UserEntity,
    public readonly game: GameEntity
  ) {}
}
