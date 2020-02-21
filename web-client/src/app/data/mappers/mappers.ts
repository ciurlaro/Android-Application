import {MultipleGamesJSON} from '../rawresponses/multiple/multiple-games-json';
import {GameJSON} from '../rawresponses/single/game-json';
import {GameEntity} from '../../domain/entities/game-entity';
import {ModeEntity} from '../../domain/entities/mode-entity';
import {ModeJSON} from '../rawresponses/single/mode-json';
import {TournamentJSON} from '../rawresponses/single/tournament-json';
import {UserJSON} from '../rawresponses/single/user-json';
import {TournamentEntity} from '../../domain/entities/tournament-entity';
import {UserEntity} from '../../domain/entities/user-entity';
import {RegistrationEntity} from '../../domain/entities/registration-entity';
import {RegistrationJSON} from '../rawresponses/single/registration-json';
import {AuthUserEntity} from '../entities/auth-user-entity';
import {Claims} from '../rawresponses/claims';
import {Url} from '../datasources/arena-tournament-endpoints';
import {Inject, Injectable} from '@angular/core';
import {hostToken, portToken, protocolToken} from '../../../environments/environment.common';

/** Interfaces */

interface SingleFromRemoteMapper<SingleRemote, Entity> {
  fromRemoteSingle(remote: SingleRemote): Entity;
}

interface MultipleFromRemoteMapper<MultipleRemote, SingleRemote, Entity> extends SingleFromRemoteMapper<SingleRemote, Entity> {
  fromRemoteMultiple(remote: MultipleRemote): Entity[];
}

interface SingleToRemoteMapper<Remote, Entity> {
  toRemoteSingle(entity: Entity): Remote;
}

interface MultipleToRemoteMapper<MultipleRemote, SingleRemote, Entity> extends SingleToRemoteMapper<SingleRemote, Entity> {
  toRemoteMultiple(remote: MultipleRemote): Entity[];
}


/** Implementations */
@Injectable({
  providedIn: 'root'
})
export class GameMapper implements MultipleFromRemoteMapper<MultipleGamesJSON, GameJSON, GameEntity> {
  fromRemoteSingle(remote: GameJSON): GameEntity {
    return new GameEntity(remote.gameName, remote.availableModes, remote.image, remote.icon, remote.icon_svg);
  }

  fromRemoteMultiple(remote: MultipleGamesJSON): GameEntity[] {
    return remote._embedded.gameEntities.map((gameJson) => this.fromRemoteSingle(gameJson));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ModeMapper implements SingleFromRemoteMapper<ModeJSON, ModeEntity> {
  fromRemoteSingle(remote: ModeJSON): ModeEntity {
    return new ModeEntity(remote.modeName);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserMapper implements SingleFromRemoteMapper<UserJSON, UserEntity> {

  fromRemoteSingle(remote: UserJSON): UserEntity {
    return new UserEntity(remote.id, remote.email, remote.nickname, remote.subscriber, remote.image);
  }

}

@Injectable({
  providedIn: 'root'
})
export class TournamentMapper implements SingleFromRemoteMapper<[TournamentJSON, GameJSON, UserJSON], TournamentEntity> {

  constructor(
    private readonly userMapper: UserMapper,
    private readonly gameMapper: GameMapper
  ) {
  }

  fromRemoteSingle(remote: [TournamentJSON, GameJSON, UserJSON]): TournamentEntity {
    return new TournamentEntity(
      remote[0].id,
      remote[0].playersNumber,
      remote[0].title,
      remote[0].tournamentDescription,
      remote[0].tournamentMode,
      this.userMapper.fromRemoteSingle(remote[2]),
      this.gameMapper.fromRemoteSingle(remote[1])
    );
  }
}


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:max-line-length
export class RegistrationMapper implements SingleFromRemoteMapper<[RegistrationJSON, TournamentJSON, GameJSON, UserJSON], RegistrationEntity> {

  constructor(
    private readonly tournamentMapper: TournamentMapper,
    private readonly userMapper: UserMapper,
    private readonly gameMapper: GameMapper
  ) {
  }

  fromRemoteSingle(remote: [RegistrationJSON, TournamentJSON, GameJSON, UserJSON]): RegistrationEntity {
    return new RegistrationEntity(
      this.userMapper.fromRemoteSingle(remote[3]),
      this.tournamentMapper.fromRemoteSingle([remote[1], remote[2], remote[3]]),
      this.gameMapper.fromRemoteSingle(remote[2]),
      NaN,
      remote[0].outcome
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class CurrentUserMapper implements SingleFromRemoteMapper<[AuthUserEntity, Claims, string?], UserEntity> {

  fromRemoteSingle(remote: [AuthUserEntity, Claims, string?]): UserEntity {
    return new UserEntity(
      remote[0].id,
      remote[0].email,
      remote[0].nickname,
      remote[1].isSubscriber,
      remote[2]
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractLinkMapper<T> implements SingleToRemoteMapper<Url, T> {

  protected constructor(
    @Inject(protocolToken) protected protocol: string,
    @Inject(hostToken) protected host: string,
    @Inject(portToken) protected port: number
  ) {
  }

  abstract toRemoteSingle(entity: T): Url;

}

@Injectable({
  providedIn: 'root'
})
export class UserLinkMapper extends AbstractLinkMapper<UserEntity> {

  toRemoteSingle(entity: UserEntity): Url {
    return {
      path: `${this.protocol}://${this.host}${this.port !== 80 ? `:${this.port}` : ''}/user/${entity.id}`
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class GameLinkMapper extends AbstractLinkMapper<GameEntity> {

  toRemoteSingle(entity: GameEntity): Url {
    return {
      path: `${this.protocol}://${this.host}${this.port !== 80 ? `:${this.port}` : ''}/game/${entity.name}`
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class TournamentLinkMapper extends AbstractLinkMapper<TournamentEntity> {

  toRemoteSingle(entity: TournamentEntity): Url {
    return {
      path: `${this.protocol}://${this.host}${this.port !== 80 ? `:${this.port}` : ''}/tournament/${entity.id}`
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class ModeLinkMapper implements SingleFromRemoteMapper<ModeJSON, ModeEntity> {

  fromRemoteSingle(remote: ModeJSON): ModeEntity {
    return new ModeEntity(remote.modeName);
  }

}




