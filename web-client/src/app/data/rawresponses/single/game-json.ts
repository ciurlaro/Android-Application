import {LinksJSON} from '../links-json';

export interface GameJSON {
  readonly gameName: string;
  readonly availableModes: string[];
  readonly image: string;
  readonly icon: string;
  readonly svgIcon: string;
  readonly _links?: LinksJSON;
}
