import {LinksJSON} from '../links-json';

export interface RegistrationJSON {
  readonly id: number;
  readonly _links: LinksJSON;
  readonly outcome?: string;
}
