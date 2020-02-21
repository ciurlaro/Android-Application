import {Injectable} from '@angular/core';
import {Observable, of, throwError, zip} from 'rxjs';
import {AuthProviders} from '../../domain/entities/auth-providers';
import {UserEntity} from '../../domain/entities/user-entity';
import {FirebaseAuthDatasource} from '../datasources/firebase-auth-datasource';
import {FirebaseStorageDatasource} from '../datasources/firebase-storage-datasource';
import {flatMap, map, toArray} from 'rxjs/operators';
import {storageImagePathFor} from '../entities/auth-user-entity';
import {ArenaTournamentRepository} from '../../domain/repositories/arena-tournament-repository';
import {GameEntity} from '../../domain/entities/game-entity';
import {TournamentEntity} from '../../domain/entities/tournament-entity';
import {RegistrationEntity} from '../../domain/entities/registration-entity';
import {ArenaTournamentDatasource} from '../datasources/arena-tournament-datasource';
import {
  CurrentUserMapper,
  GameLinkMapper,
  GameMapper,
  ModeLinkMapper,
  ModeMapper,
  RegistrationMapper,
  TournamentLinkMapper,
  TournamentMapper,
  UserLinkMapper,
  UserMapper
} from '../mappers/mappers';
import {ModeEntity} from '../../domain/entities/mode-entity';
import {RegistrationSplitter, TournamentSplitter} from '../splitters/splitters';
import {MultipleTournamentsJSON} from '../rawresponses/multiple/multiple-tournaments-json';
import {MultipleRegistrationsJSON} from '../rawresponses/multiple/multiple-registrations-json';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {TournamentJSON} from '../rawresponses/single/tournament-json';
import {RegistrationJSON} from '../rawresponses/single/registration-json';
import {Claims} from '../rawresponses/claims';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class ArenaTournamentRepositoryImplementation extends ArenaTournamentRepository {

  constructor(
    private readonly arenaTournamentDs: ArenaTournamentDatasource,
    private readonly firebaseAuthDs: FirebaseAuthDatasource,
    private readonly firebaseStorageDs: FirebaseStorageDatasource,
    private readonly gameMapper: GameMapper,
    private readonly modeMapper: ModeMapper,
    private readonly tournamentMapper: TournamentMapper,
    private readonly registrationMapper: RegistrationMapper,
    private readonly userMapper: UserMapper,
    private readonly currentUserMapper: CurrentUserMapper,
    private readonly tournamentSplitter: TournamentSplitter,
    private readonly registrationSplitter: RegistrationSplitter,
    private readonly userLinkMapper: UserLinkMapper,
    private readonly gameLinkMapper: GameLinkMapper,
    private readonly modeLinkMapper: ModeLinkMapper,
    private readonly tournamentLinkMapper: TournamentLinkMapper
  ) {
    super();
  }

  authFlow = this.firebaseAuthDs.authFlow;

  createAccountWithEmailAndPassword(email: string, password: string): Observable<boolean> {
    return this.firebaseAuthDs.createAccountWithEmailPassword(email, password);
  }

  getAuthMethodsForEmail(email: string): Observable<AuthProviders[]> {
    return this.firebaseAuthDs.getAuthMethodsForEmail(email);
  }

  getCurrentUserAuthMethods(): Observable<AuthProviders[]> {
    return this.firebaseAuthDs.getCurrentUserAuthMethods();
  }

  isCurrentUserEmailVerified(): Observable<boolean> {
    return this.firebaseAuthDs.isCurrentUserEmailVerified();
  }

  isCurrentUserSubscriber(): Observable<boolean> {
    return this.firebaseAuthDs.getCurrentUserClaims()
      .pipe(map((claims) => claims.isSubscriber));
  }

  linkFacebookProvider(token: string): Observable<boolean> {
    return this.firebaseAuthDs.linkFacebookAuthProvider(token);
  }

  linkGoogleAuthProvider(): Observable<boolean> {
    return this.firebaseAuthDs.linkGoogleAuthProviderWithPopup();
  }

  linkPasswordAuthProvider(password: string): Observable<boolean> {
    return this.firebaseAuthDs.linkPasswordAuthProvider(password);
  }

  loginWithEmailAndPassword(email: string, password: string): Observable<boolean> {
    return this.firebaseAuthDs.loginWithEmailPassword(email, password);
  }

  loginWithFacebookToken(token: string): Observable<boolean> {
    return this.firebaseAuthDs.loginWithFacebookToken(token);
  }

  loginWithGooglePopup(): Observable<boolean> {
    return this.firebaseAuthDs.loginWithGooglePopup();
  }

  logout(): Observable<boolean> {
    return this.firebaseAuthDs.logout();
  }

  reauthenticateWithFacebookToken(token: string): Observable<boolean> {
    return this.firebaseAuthDs.reauthenticateWithFacebook(token);
  }

  reauthenticateWithGoogleToken(token: string): Observable<boolean> {
    return this.firebaseAuthDs.reauthenticateWithGoogle(token);
  }


  getCurrentUser(): Observable<UserEntity | null> {
    return this.firebaseAuthDs.getCurrentAuthUser().pipe(
      flatMap((authUser) => {
        return authUser ? zip(
          authUser.photoURL && authUser.photoURL.startsWith('http') ?
            of(authUser.photoURL) : this.firebaseStorageDs.getFileUrl(storageImagePathFor(authUser)),
          this.firebaseAuthDs.getCurrentUserClaims())
          .pipe(
            map(([userProfileImageUrl, claims]) => buildUserEntity(userProfileImageUrl, claims, authUser))
          ) : of<UserEntity>(null);
      })
    );

    function buildUserEntity(userProfileImageUrl: string, claims: Claims, authUser: User): UserEntity {
      return new UserEntity(authUser.uid, authUser.email, authUser.displayName, claims.isSubscriber, userProfileImageUrl);
    }
  }

  createGame(gameName: string, availableModes: string[], image: string, icon: string): Observable<GameEntity> {
    return this.arenaTournamentDs.createGame({availableModes, gameName, icon, image}).pipe(
      map((gameJson) => this.gameMapper.fromRemoteSingle(gameJson))
    );
  }

  createGameMode(modeName: string): Observable<ModeEntity> {
    return this.arenaTournamentDs.createGameMode({modeName}).pipe(
      map((modeJson) => this.modeLinkMapper.fromRemoteSingle(modeJson))
    );
  }

  createRegistration(user: UserEntity, tournament: TournamentEntity, outcome?: string): Observable<RegistrationEntity> {

    const userUrl = this.userLinkMapper.toRemoteSingle(user).path;
    const tournamentUrl = this.tournamentLinkMapper.toRemoteSingle(tournament).path;

    return this.arenaTournamentDs.createRegistration(
      {
        user: userUrl,
        tournament: tournamentUrl,
        outcome
      }).pipe(
      flatMap((registrationJson) => this.getRegistrationById(registrationJson.id))
    );
  }

  createTournament(
    playersNumber: number,
    title: string,
    description: string,
    mode: string,
    admin: UserEntity,
    game: GameEntity
  ): Observable<TournamentEntity> {

    const userUrl = this.userLinkMapper.toRemoteSingle(admin);
    const gameUrl = this.gameLinkMapper.toRemoteSingle(game);

    return this.arenaTournamentDs.createTournament({
      playersNumber,
      title,
      tournamentDescription: description,
      tournamentMode: mode,
      admin: userUrl.path,
      game: gameUrl.path
    }).pipe(
      flatMap((tournamentJson) => this.getTournamentById(tournamentJson.id))
    );
  }

  getAllGames(page: number): Observable<GameEntity[]> {
    return this.arenaTournamentDs.getAllGames(page).pipe(
      map((multipleGamesJson) => this.gameMapper.fromRemoteMultiple(multipleGamesJson))
    );
  }

  getGameByName(gameName: string): Observable<GameEntity> {
    return this.arenaTournamentDs.getGameByName(gameName).pipe(
      map((gameJson) => this.gameMapper.fromRemoteSingle(gameJson))
    );
  }

  getGamesByMode(mode: string, page: number): Observable<GameEntity[]> {
    return this.arenaTournamentDs.getGamesByMode(mode, page).pipe(
      map((multipleGamesJson) => this.gameMapper.fromRemoteMultiple(multipleGamesJson))
    );
  }

  getGamesContainingName(name: string, page: number): Observable<GameEntity[]> {
    return this.arenaTournamentDs.getGamesContainingName(name, page).pipe(
      map((multipleGamesJson) => this.gameMapper.fromRemoteMultiple(multipleGamesJson))
    );
  }

  getRegistrationById(registrationId: number): Observable<RegistrationEntity> {
    return this.arenaTournamentDs.getRegistrationById(registrationId).pipe(
      flatMap((registrationJson) => {
        return zip(
          of(registrationJson),
          this.arenaTournamentDs.getUserByLink(registrationJson._links.user.href),
          this.arenaTournamentDs.getTournamentByLink(registrationJson._links.tournament.href).pipe(
            flatMap((tournamentJson) => {
              return zip(of(tournamentJson), this.arenaTournamentDs.getGameByLink(tournamentJson._links.game.href));
            })
          ));
      }),
      map(([registrationJson, userJson, [tournamentJson, gameJson]]) => {
        return this.registrationMapper.fromRemoteSingle([registrationJson, tournamentJson, gameJson, userJson]);
      })
    );
  }

  getRegistrationsByTournament(tournamentId: number, page: number): Observable<RegistrationEntity[]> {
    return this.arenaTournamentDs.getRegistrationsByTournament(tournamentId, page).pipe(
      flatMap((multipleRegistrationsJson) => this.transformRegistrations(multipleRegistrationsJson))
    );
  }


  getRegistrationsByUser(userId: string, page: number): Observable<RegistrationEntity[]> {
    return this.arenaTournamentDs.getRegistrationsByUser(userId, page).pipe(
      flatMap((multipleRegistrationsJson) => this.transformRegistrations(multipleRegistrationsJson))
    );
  }

  getShowcaseTournaments(page: number): Observable<TournamentEntity[]> {
    return this.arenaTournamentDs.getShowCaseTournaments(page).pipe(
      flatMap((multipleTournamentsJson) => this.transformTournaments(multipleTournamentsJson))
    );
  }

  getTournamentById(tournamentId: number): Observable<TournamentEntity> {
    return this.arenaTournamentDs.getTournamentById(tournamentId).pipe(
      flatMap(tournamentsJSON => this.fromTournamentJsonToEntity(tournamentsJSON))
    );
  }


  getTournamentsByGame(gameName: string, page: number): Observable<TournamentEntity[]> {
    return this.arenaTournamentDs.getTournamentsByGameName(gameName, page).pipe(
      flatMap((multipleTournamentsJson) => this.transformTournaments(multipleTournamentsJson))
    );
  }

  getTournamentsByMode(mode: string, page: number): Observable<TournamentEntity[]> {
    return this.arenaTournamentDs.getTournamentsByMode(mode, page).pipe(
      flatMap((multipleTournamentsJson) => this.transformTournaments(multipleTournamentsJson))
    );
  }

  getTournamentsByUser(userId: string, page: number): Observable<TournamentEntity[]> {
    return this.arenaTournamentDs.getTournamentsByUser(userId, page).pipe(
      flatMap((multipleTournamentsJson) => this.transformTournaments(multipleTournamentsJson))
    );

  }

  getTournamentsContainingTitles(title: string, page: number): Observable<TournamentEntity[]> {
    return this.arenaTournamentDs.getTournamentsContainingTitle(title, page).pipe(
      flatMap((multipleTournamentsJson) => this.transformTournaments(multipleTournamentsJson))
    );
  }

  getUserById(id: string): Observable<UserEntity> {
    return this.arenaTournamentDs.getUserById(id).pipe(
      map((userJson) => this.userMapper.fromRemoteSingle(userJson))
    );
  }

  searchGamesByName(gameName: string, page: number): Observable<GameEntity[]> {
    return this.arenaTournamentDs.searchGamesByName(gameName, page).pipe(
      map((multipleGamesJson) => this.gameMapper.fromRemoteMultiple(multipleGamesJson))
    );
  }

  searchTournamentsByName(title: string, page: number): Observable<TournamentEntity[]> {
    return this.arenaTournamentDs.searchTournaments(title, page).pipe(
      flatMap((multipleTournamentsJson) => this.transformTournaments(multipleTournamentsJson))
    );
  }

  updateCurrentUserEmail(email: string): Observable<boolean> {
    return this.firebaseAuthDs.updateUserEmail(email);
  }

  updateCurrentUserNickname(nickname: string): Observable<boolean> {
    return this.firebaseAuthDs.updateUserNickname(nickname);
  }

  updateCurrentUserPassword(password: string): Observable<boolean> {
    return this.firebaseAuthDs.updateUserPassword(password);
  }

  updateCurrentUserProfileImage(image: Uint8Array): Observable<boolean> {
    return this.currentUserOrError().pipe(
      flatMap((currentUser) => {
        const storagePath = `users/${currentUser.id}/profile`;
        return this.firebaseStorageDs.uploadFile(image, storagePath).pipe(map((_) => storagePath));
      }),
      flatMap((storagePath: string) => this.firebaseAuthDs.updateUserProfileImage(storagePath))
    );
  }

  private currentUserOrError(): Observable<UserEntity> {
    return this.getCurrentUser().pipe(
      flatMap((currentUser) => currentUser ? of(currentUser) : throwError('User not logged in.'))
    );
  }

  private transformTournaments(multipleTournamentJson: MultipleTournamentsJSON): Observable<TournamentEntity[]> {
    return fromArray(this.tournamentSplitter.split(multipleTournamentJson)).pipe(
      flatMap((tournamentsJson) => this.fromTournamentJsonToEntity(tournamentsJson)),
      toArray()
    );
  }

  private transformRegistrations(multipleRegistrationsJson: MultipleRegistrationsJSON): Observable<RegistrationEntity[]> {
    return fromArray(this.registrationSplitter.split(multipleRegistrationsJson)).pipe(
      flatMap((registrationJson) => this.fromRegistrationJsonToEntity(registrationJson)),
      toArray()
    );
  }

  private fromTournamentJsonToEntity(tournamentsJSON: TournamentJSON): Observable<TournamentEntity> {
    return zip(
      of(tournamentsJSON),
      this.arenaTournamentDs.getGameByLink(tournamentsJSON._links.game.href),
      this.arenaTournamentDs.getUserByLink(tournamentsJSON._links.admin.href)
    ).pipe(
      map((triple) => this.tournamentMapper.fromRemoteSingle(triple))
    );
  }

  private fromRegistrationJsonToEntity(registrationJSON: RegistrationJSON): Observable<RegistrationEntity> {
    return zip(
      of(registrationJSON),
      this.arenaTournamentDs.getTournamentByLink(registrationJSON._links.tournament.href),
      this.arenaTournamentDs.getGameByLink(registrationJSON._links.game.href),
      this.arenaTournamentDs.getUserByLink(registrationJSON._links.user.href)
    ).pipe(
      map((quadruple) => this.registrationMapper.fromRemoteSingle(quadruple))
    );
  }
}
