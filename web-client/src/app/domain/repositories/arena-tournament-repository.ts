import {UserEntity} from '../entities/user-entity';
import {Observable} from 'rxjs';
import {AuthProviders} from '../entities/auth-providers';
import {TournamentEntity} from '../entities/tournament-entity';
import {GameEntity} from '../entities/game-entity';
import {RegistrationEntity} from '../entities/registration-entity';
import {ModeEntity} from '../entities/mode-entity';
import {AuthStatus} from "../../data/datasources/firebase-auth-datasource";

export abstract class ArenaTournamentRepository {

  abstract authFlow: Observable<AuthStatus>;

  abstract createGameMode(modeName: string): Observable<ModeEntity>;

  abstract createGame(gameName: string, availableModes: string[], image: string, icon: string): Observable<GameEntity>;

  abstract createRegistration(user: UserEntity, tournament: TournamentEntity, outcome?: string): Observable<RegistrationEntity>;

  abstract createTournament(
    playersNumber: number,
    title: string,
    description: string,
    mode: string,
    admin: UserEntity,
    game: GameEntity
  ): Observable<TournamentEntity>;

  abstract updateCurrentUserEmail(email: string): Observable<boolean>;

  abstract updateCurrentUserPassword(password: string): Observable<boolean>;

  abstract updateCurrentUserNickname(nickname: string): Observable<boolean>;

  abstract updateCurrentUserProfileImage(image: Uint8Array): Observable<boolean>;

  abstract getGameByName(gameName: string): Observable<GameEntity>;

  abstract searchGamesByName(gameName: string, page: number): Observable<GameEntity[]>;

  abstract getAllGames(page: number): Observable<GameEntity[]>;

  abstract getGamesContainingName(name: string, page: number): Observable<GameEntity[]>;

  abstract getGamesByMode(mode: string, page: number): Observable<GameEntity[]>;

  abstract getTournamentById(tournamentId: number): Observable<TournamentEntity>;

  abstract getTournamentsByMode(mode: string, page: number): Observable<TournamentEntity[]>;

  abstract getTournamentsByGame(gameName: string, page: number): Observable<TournamentEntity[]>;

  abstract getTournamentsByUser(userId: string, page: number): Observable<TournamentEntity[]>;

  abstract getShowcaseTournaments(page: number): Observable<TournamentEntity[]>;

  abstract getTournamentsContainingTitles(title: string, page: number): Observable<TournamentEntity[]>;

  abstract searchTournamentsByName(title: string, page: number): Observable<TournamentEntity[]>;

  abstract getRegistrationById(registrationId: number): Observable<RegistrationEntity>;

  abstract getRegistrationsByUser(userId: string, page: number): Observable<RegistrationEntity[]>;

  abstract getRegistrationsByTournament(tournamentId: number, page: number): Observable<RegistrationEntity[]>;

  abstract getUserById(id: string): Observable<UserEntity>;

  abstract getCurrentUser(): Observable<UserEntity | null>;

  abstract isCurrentUserEmailVerified(): Observable<boolean>;

  abstract loginWithEmailAndPassword(email: string, password: string): Observable<boolean>;

  abstract loginWithFacebookToken(token: string): Observable<boolean>;

  abstract loginWithGooglePopup(): Observable<boolean>;

  abstract logout(): Observable<boolean>;

  abstract createAccountWithEmailAndPassword(email: string, password: string): Observable<boolean>;

  abstract getCurrentUserAuthMethods(): Observable<AuthProviders[]>;

  abstract getAuthMethodsForEmail(email: string): Observable<AuthProviders[]>;

  abstract linkGoogleAuthProvider(): Observable<boolean>;

  abstract linkFacebookProvider(token: string): Observable<boolean>;

  abstract linkPasswordAuthProvider(token: string): Observable<boolean>;

  abstract reauthenticateWithGoogleToken(token: string): Observable<boolean>;

  abstract reauthenticateWithFacebookToken(token: string): Observable<boolean>;

  abstract isCurrentUserSubscriber(): Observable<boolean>;

}
