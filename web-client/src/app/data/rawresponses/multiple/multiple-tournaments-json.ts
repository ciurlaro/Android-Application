import {LinksJSON} from '../links-json';
import {PageJSON} from '../page-json';
import {TournamentJSON} from '../single/tournament-json';

export interface MultipleTournamentsJSON {
  readonly _embedded: TournamentEmbeddedJSON;
  readonly _links: LinksJSON;
  readonly page: PageJSON;
}


export interface TournamentEmbeddedJSON {
  readonly tournamentEntities: TournamentJSON[];
}
