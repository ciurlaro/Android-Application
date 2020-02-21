import {ArenaTournamentEndpoints} from '../../data/datasources/arena-tournament-endpoints';
import {ArenaTournamentDatasource} from '../../data/datasources/arena-tournament-datasource';
import {CreateGameJSON} from '../../data/rawresponses/creation/create-game-json';
import {GameJSON} from '../../data/rawresponses/single/game-json';
import {CreateGameModeJSON} from '../../data/rawresponses/creation/create-game-mode-json';
import {ModeJSON} from '../../data/rawresponses/single/mode-json';
import {CreateRegistrationJSON} from '../../data/rawresponses/creation/create-registration-json';
import {RegistrationJSON} from '../../data/rawresponses/single/registration-json';
import {CreateTournamentJSON} from '../../data/rawresponses/creation/create-tournament-json';
import {TournamentJSON} from '../../data/rawresponses/single/tournament-json';
import {SubscriptionStatusJSON} from '../../data/rawresponses/single/subscription-status-json';
import {AccountStatusJSON} from '../../data/rawresponses/single/account-status-json';
import {MultipleGamesJSON} from '../../data/rawresponses/multiple/multiple-games-json';
import {MultipleTournamentsJSON} from '../../data/rawresponses/multiple/multiple-tournaments-json';
import {UserJSON} from '../../data/rawresponses/single/user-json';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {MultipleRegistrationsJSON} from '../../data/rawresponses/multiple/multiple-registrations-json';

@Injectable({
  providedIn: 'root'
})
export class ArenaTournamentDatasourceImplementation extends ArenaTournamentDatasource {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly endpoints: ArenaTournamentEndpoints
  ) {
    super();
  }

  createGame(gameJSON: CreateGameJSON): Observable<GameJSON> {
    const url = this.endpoints.createGameUrl();
    return this.httpClient.post<GameJSON>(url.path, gameJSON);
  }

  createGameMode(gameModeJSON: CreateGameModeJSON): Observable<ModeJSON> {
    const url = this.endpoints.createGameModeUrl();
    return this.httpClient.post<ModeJSON>(url.path, gameModeJSON);
  }

  createRegistration(registrationJSON: CreateRegistrationJSON): Observable<RegistrationJSON> {
    const url = this.endpoints.createRegistrationUrl();
    return this.httpClient.post<RegistrationJSON>(url.path, registrationJSON);
  }

  createTournament(tournamentJSON: CreateTournamentJSON): Observable<TournamentJSON> {
    const url = this.endpoints.createTournamentUrl();
    return this.httpClient.post<TournamentJSON>(url.path, tournamentJSON);
  }

  getAccountSubscription(): Observable<SubscriptionStatusJSON> {
    const url = this.endpoints.isAccountSubscribedUrl();
    return this.httpClient.get<SubscriptionStatusJSON>(url.path);
  }

  getAccountVerificationStatus(): Observable<AccountStatusJSON> {
    const url = this.endpoints.isAccountVerifiedUrl();
    return this.httpClient.get<AccountStatusJSON>(url.path);
  }

  getAllGames(page: number): Observable<MultipleGamesJSON> {
    const url = this.endpoints.allGamesUrl(page);
    return this.httpClient.get<MultipleGamesJSON>(url.path, {params: url.params});
  }

  getAllTournaments(page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.allTournamentsUrl(page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  getGameByLink(link: string): Observable<GameJSON> {
    return this.httpClient.get<GameJSON>(link);
  }

  getGameByName(gameName: string): Observable<GameJSON> {
    const url = this.endpoints.gameByNameUrl(gameName);
    return this.httpClient.get<GameJSON>(url.path, {params: url.params});
  }

  getGamesByMode(mode: string, page: number): Observable<MultipleGamesJSON> {
    const url = this.endpoints.gamesByModeUrl(mode, page);
    return this.httpClient.get<MultipleGamesJSON>(url.path, {params: url.params});
  }

  getGamesContainingName(gameName: string, page: number): Observable<MultipleGamesJSON> {
    const url = this.endpoints.gamesContainingNameUrl(gameName, page);
    return this.httpClient.get<MultipleGamesJSON>(url.path, {params: url.params});
  }

  getRegistrationById(id: number): Observable<RegistrationJSON> {
    const url = this.endpoints.registrationByIdUrl(id);
    return this.httpClient.get<RegistrationJSON>(url.path, {params: url.params});
  }

  getRegistrationByLink(link: string): Observable<RegistrationJSON> {
    return this.httpClient.get<RegistrationJSON>(link);
  }

  getRegistrationsByTournament(tournamentId: number, page: number): Observable<MultipleRegistrationsJSON> {
    const url = this.endpoints.registrationsByTournamentUrl(tournamentId, page);
    return this.httpClient.get<MultipleRegistrationsJSON>(url.path, {params: url.params});
  }

  getRegistrationsByUser(userId: string, page: number): Observable<MultipleRegistrationsJSON> {
    const url = this.endpoints.registrationsByUserUrl(userId, page);
    return this.httpClient.get<MultipleRegistrationsJSON>(url.path, {params: url.params});
  }

  getShowCaseTournaments(page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.getShowCaseTournaments(page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  getTournamentById(id: number): Observable<TournamentJSON> {
    const url = this.endpoints.tournamentByIdUrl(id);
    return this.httpClient.get<TournamentJSON>(url.path, {params: url.params});
  }

  getTournamentByLink(link: string): Observable<TournamentJSON> {
    return this.httpClient.get<TournamentJSON>(link);
  }

  getTournamentsByGameName(gameName: string, page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.tournamentsByGameName(gameName, page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  getTournamentsByMode(mode: string, page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.tournamentsByModeUrl(mode, page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  getTournamentsByUser(userId: string, page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.tournamentsByAdmin(userId, page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  getTournamentsContainingTitle(title: string, page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.getTournamentsContainingTitle(title, page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  getUserById(id: string): Observable<UserJSON> {
    const url = this.endpoints.userByIdUrl(id);
    return this.httpClient.get<UserJSON>(url.path, {params: url.params});
  }

  getUserByLink(link: string): Observable<UserJSON> {
    return this.httpClient.get<UserJSON>(link);
  }

  searchGamesByName(query: string, page: number): Observable<MultipleGamesJSON> {
    const url = this.endpoints.searchGamesByNameUrl(query, page);
    return this.httpClient.get<MultipleGamesJSON>(url.path, {params: url.params});
  }

  searchTournaments(title: string, page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.searchTournaments(title, page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

  searchTournamentsByName(name: string, page: number): Observable<MultipleTournamentsJSON> {
    const url = this.endpoints.searchTournamentsByNameUrl(name, page);
    return this.httpClient.get<MultipleTournamentsJSON>(url.path, {params: url.params});
  }

}
