import {CreateGameModeJSON} from '../rawresponses/creation/create-game-mode-json';
import {ModeJSON} from '../rawresponses/single/mode-json';
import {CreateGameJSON} from '../rawresponses/creation/create-game-json';
import {GameJSON} from '../rawresponses/single/game-json';
import {CreateRegistrationJSON} from '../rawresponses/creation/create-registration-json';
import {RegistrationJSON} from '../rawresponses/single/registration-json';
import {CreateTournamentJSON} from '../rawresponses/creation/create-tournament-json';
import {TournamentJSON} from '../rawresponses/single/tournament-json';
import {MultipleGamesJSON} from '../rawresponses/multiple/multiple-games-json';
import {MultipleTournamentsJSON} from '../rawresponses/multiple/multiple-tournaments-json';
import {MultipleRegistrationsJSON} from '../rawresponses/multiple/multiple-registrations-json';
import {UserJSON} from '../rawresponses/single/user-json';
import {AccountStatusJSON} from '../rawresponses/single/account-status-json';
import {SubscriptionStatusJSON} from '../rawresponses/single/subscription-status-json';
import {Observable} from 'rxjs';

export abstract class ArenaTournamentDatasource {

  abstract createGameMode(createGameModeJSON: CreateGameModeJSON): Observable<ModeJSON>;

  abstract createGame(createGameJSON: CreateGameJSON): Observable<GameJSON>;

  abstract createRegistration(createRegistrationJSON: CreateRegistrationJSON): Observable<RegistrationJSON>;

  abstract createTournament(createTournamentJSON: CreateTournamentJSON): Observable<TournamentJSON>;

  abstract getAllGames(page: number): Observable<MultipleGamesJSON>;

  abstract getGameByName(gameName: string): Observable<GameJSON>;

  abstract searchGamesByName(query: string, page: number): Observable<MultipleGamesJSON>;

  abstract getGameByLink(link: string): Observable<GameJSON>;

  abstract getGamesContainingName(gameName: string, page: number): Observable<MultipleGamesJSON>;

  abstract getGamesByMode(mode: string, page: number): Observable<MultipleGamesJSON>;

  abstract getAllTournaments(page: number): Observable<MultipleTournamentsJSON>;

  abstract getTournamentById(id: number): Observable<TournamentJSON>;

  abstract getTournamentByLink(link: string): Observable<TournamentJSON>;

  abstract getTournamentsByMode(mode: string, page: number): Observable<MultipleTournamentsJSON>;

  abstract getTournamentsByGameName(gameName: string, page: number): Observable<MultipleTournamentsJSON>;

  abstract getTournamentsByUser(userId: string, page: number): Observable<MultipleTournamentsJSON>;

  abstract searchTournamentsByName(name: string, page: number): Observable<MultipleTournamentsJSON>;

  abstract getShowCaseTournaments(page: number): Observable<MultipleTournamentsJSON>;

  abstract getTournamentsContainingTitle(title: string, page: number): Observable<MultipleTournamentsJSON>;

  abstract getRegistrationById(id: number): Observable<RegistrationJSON>;

  abstract getRegistrationByLink(link: string): Observable<RegistrationJSON>;

  abstract getRegistrationsByUser(userId: string, page: number): Observable<MultipleRegistrationsJSON>;

  abstract getRegistrationsByTournament(tournamentId: number, page: number): Observable<MultipleRegistrationsJSON>;

  abstract getUserById(id: string): Observable<UserJSON>;

  abstract getUserByLink(link: string): Observable<UserJSON>;

  abstract getAccountVerificationStatus(): Observable<AccountStatusJSON>;

  abstract getAccountSubscription(): Observable<SubscriptionStatusJSON>;

  abstract searchTournaments(title: string, page: number): Observable<MultipleTournamentsJSON>;
}
