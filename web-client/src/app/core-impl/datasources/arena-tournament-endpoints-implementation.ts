import {ArenaTournamentEndpoints, Url} from '../../data/datasources/arena-tournament-endpoints';
import {Injectable} from '@angular/core';
import {CustomHttpRequestBuilderService} from '../../http/custom-http-request-builder.service';

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
    return this.urlBuilderService.buildUrl('game', (params) => {
      params.append('page', page.toString());
    });
  }

  allRegistrationsUrl(page: number): Url {
    return this.urlBuilderService.buildUrl('registration', (params) => {
      params.append('page', page.toString());
    });
  }

  allTournamentsUrl(page: number): Url {
    return this.urlBuilderService.buildUrl('tournament', (params) => {
      params.append('page', page.toString());
    });
  }

  gameByNameUrl(name: string): Url {
    return this.urlBuilderService.buildUrl(`game/${name}`);
  }

  gamesContainingNameUrl(gameName: string, page: number): Url {
    return this.urlBuilderService.buildUrl('game/search/byGameNameContaining', (params) => {
      params.append('gameName', gameName);
      params.append('page', page.toString());
    });
  }

  gamesByModeUrl(mode: string, page: number): Url {
    return this.urlBuilderService.buildUrl('game/search/byMode', (params) => {
      params.append('available_modes_mode_name', mode);
      params.append('page', page.toString());
    });
  }

  getShowCaseTournaments(page: number): Url {
    return this.urlBuilderService.buildUrl(`tournament/search/byShowCase`, (params) => {
      params.append('page', page.toString());
    });
  }

  getTournamentsContainingTitle(title: string, page: number): Url {
    return this.urlBuilderService.buildUrl('byTitleContaining', (params) => {
      params.append('title', title);
      params.append('page', page.toString());
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
    return this.urlBuilderService.buildUrl('registration/search/byTournamentId', (params) => {
      params.append('tournamentId', tournamentId.toString());
      params.append('page', page.toString());
    });
  }

  registrationsByUserUrl(userId: string, page: number): Url {
    return this.urlBuilderService.buildUrl('registration/search/byUserId', (params) => {
      params.append('userId', userId);
      params.append('page', page.toString());
    });
  }

  searchGamesByNameUrl(query: string, page: number): Url {
    return this.urlBuilderService.buildUrl(`game/search/byGameName`, (params) => {
      params.append('gameName', query);
      params.append('page', page.toString());
    });
  }

  searchTournaments(title: string, page: number, gameId?: string): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byNameAndGames', (params) => {
      params.append('title', title);
      if (gameId) {
        params.append('gameIds', gameId);
      }
    });
  }

  searchTournamentsByNameUrl(query: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byName', (params) => {
      params.append('title', query);
      params.append('page', page.toString());
    });
  }

  tournamentByIdUrl(id: number): Url {
    return this.urlBuilderService.buildUrl(`tournament/${id}`);
  }

  tournamentsByAdmin(userId: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byUserId', (params) => {
      params.append('admin', userId);
      params.append('page', page.toString());
    });
  }

  tournamentsByGameName(gameName: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byGame', (params) => {
      params.append('gameName', gameName);
      params.append('page', page.toString());
    });
  }

  tournamentsByModeUrl(mode: string, page: number): Url {
    return this.urlBuilderService.buildUrl('tournament/search/byMode', (params) => {
      params.append('tournamentMode', mode);
      params.append('page', page.toString());
    });
  }

  userByIdUrl(userId: string): Url {
    return this.urlBuilderService.buildUrl(`user/${userId}`);
  }

}
