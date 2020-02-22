import {ArenaTournamentEndpoints, Url} from '../../data/datasources/arena-tournament-endpoints';
import {Injectable} from '@angular/core';
import {CustomHttpRequestBuilderService} from '../../http/custom-http-request-builder.service';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArenaTournamentEndpointsImplementation extends ArenaTournamentEndpoints {

  constructor(private urlBuilderService: CustomHttpRequestBuilderService) {
    super();
  }


  /** Post endpoints */

  createGameModeUrl(): Url {
    return this.urlBuilderService.buildUrl('mode');
  }

  createGameUrl(): Url {
    return this.urlBuilderService.buildUrl('game');
  }

  createRegistrationUrl(): Url {
    return this.urlBuilderService.buildUrl('registration');
  }

  createTournamentUrl(): Url {
    return this.urlBuilderService.buildUrl('tournament');
  }

  /** Get endpoints */

  allGamesUrl(page: number): Url {
    return this.urlBuilderService.buildUrl('game', () => {
      return new HttpParams().set('page', page.toString());
    });
  }

  allRegistrationsUrl(page: number): Url {
    return this.urlBuilderService.buildUrl('registration', () => {
      return new HttpParams().set('page', page.toString());
    });
  }

  allTournamentsUrl(page: number): Url {
    return this.urlBuilderService.buildUrl('tournament', () => {
      return new HttpParams().set('page', page.toString());
    });
  }

  gameByNameUrl(name: string): Url {
    return this.urlBuilderService.buildUrl(`game/${name}`);
  }

  gamesContainingNameUrl(gameName: string, page: number): Url {
    return this.urlBuilderService.buildUrl('game/search/byGameNameContaining', () => {
      return new HttpParams().set('gameName', gameName).set('page', page.toString());
    });
  }

  gamesByModeUrl(mode: string, page: number): Url {
    return this.urlBuilderService.buildUrl('game/search/byMode', () => {
      return new HttpParams().set('available_modes_mode_name', mode).set('page', page.toString());
    });
  }

  getShowCaseTournaments(page: number): Url {
    return this.urlBuilderService.buildUrl(`tournament`, () => {
      return new HttpParams().set('page', page.toString());
    });
  }

  getTournamentsByTitleUrl(title: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byTitleContaining', () => {
      return new HttpParams().set('title', title).set('page', page.toString());
    });
  }

  isAccountSubscribedUrl(): Url {
    return this.urlBuilderService.buildUrl('isAccountSubscribed');
  }

  isAccountVerifiedUrl(): Url {
    return this.urlBuilderService.buildUrl('isAccountVerified');
  }

  registrationByIdUrl(id: number): Url {
    return this.urlBuilderService.buildUrl(`registration/${id}`);
  }

  registrationsByTournamentUrl(tournamentId: number, page: number): Url {
    return this.urlBuilderService.buildUrl('registration/search/byTournamentId', () => {
      return new HttpParams().set('tournamentId', tournamentId.toString()).set('page', page.toString());
    });
  }

  registrationsByUserUrl(userId: string, page: number): Url {
    return this.urlBuilderService.buildUrl('registration/search/byUserId', () => {
      return new HttpParams().set('userId', userId).set('page', page.toString());
    });
  }

  searchGamesByNameUrl(query: string, page: number): Url {
    return this.urlBuilderService.buildUrl(`game/search/byGameName`, () => {
      return new HttpParams().set('gameName', query).set('page', page.toString());
    });
  }

  searchTournamentsByNameUrl(query: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byName', () => {
      return new HttpParams().set('title', query).set('page', page.toString());
    });
  }

  tournamentByIdUrl(id: number): Url {
    return this.urlBuilderService.buildUrl(`tournament/${id}`);
  }

  tournamentsByAdmin(userId: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byUserId', () => {
      return new HttpParams().set('admin', userId).set('page', page.toString());
    });
  }

  tournamentsByGameName(gameName: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byGame', () => {
      return new HttpParams().set('gameName', gameName).set('page', page.toString());
    });
  }

  tournamentsByModeUrl(mode: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byMode', () => {
      return new HttpParams().set('tournamentMode', mode).set('page', page.toString());
    });
  }

  userByIdUrl(userId: string): Url {
    return this.urlBuilderService.buildUrl('user', () => new HttpParams().set('id', userId));
  }

}
