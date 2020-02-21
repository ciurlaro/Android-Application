import {HttpHeaders, HttpParams} from '@angular/common/http';

export abstract class ArenaTournamentEndpoints {

  /** Post endpoints  */

  abstract createGameModeUrl(): Url;

  abstract createGameUrl(): Url;

  abstract createRegistrationUrl(): Url;

  abstract createTournamentUrl(): Url;



  /** Get endpoints  */

  abstract allGamesUrl(page: number): Url;

  abstract gameByNameUrl(name: string): Url;

  abstract searchGamesByNameUrl(query: string, page: number): Url;

  abstract gamesContainingNameUrl(gameName: string, page: number): Url;

  abstract gamesByModeUrl(mode: string, page: number): Url;

  abstract allTournamentsUrl(page: number): Url;

  abstract tournamentByIdUrl(id: number): Url;

  abstract tournamentsByGameName(gameName: string, page: number): Url;

  abstract tournamentsByModeUrl(mode: string, page: number): Url;

  abstract tournamentsByAdmin(userId: string, page: number): Url;

  abstract searchTournamentsByNameUrl(query: string, page: number): Url;

  abstract getShowCaseTournaments(page: number): Url;

  abstract getTournamentsContainingTitle(title: string, page: number): Url;

  abstract allRegistrationsUrl(page: number): Url;

  abstract registrationByIdUrl(id: number): Url;

  abstract registrationsByUserUrl(userId: string, page: number): Url;

  abstract registrationsByTournamentUrl(tournamentId: number, page: number): Url;

  abstract userByIdUrl(userId: string): Url;

  abstract isAccountVerifiedUrl(): Url;

  abstract isAccountSubscribedUrl(): Url;

  abstract searchTournaments(title: string, page: number, gameId?: string): Url;


}

export interface Url {
  path: string;
  params?: HttpParams;
  headers?: HttpHeaders;
}
