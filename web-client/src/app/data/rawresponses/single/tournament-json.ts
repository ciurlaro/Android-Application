import {LinksJSON} from '../links-json';

export interface TournamentJSON {
  readonly id: number;
  readonly playersNumber: number;
  readonly title: string;
  readonly tournamentDescription: string;
  readonly tournamentMode: string;
  readonly _links?: LinksJSON;
}
