import {HrefJSON} from './href-json';

export interface LinksJSON {
  readonly self: HrefJSON;
  readonly tournamentEntity?: HrefJSON;
  readonly gameEntity?: HrefJSON;
  readonly modeEntity?: HrefJSON;
  readonly registrationEntity?: HrefJSON;
  readonly userEntity?: HrefJSON;
  readonly profile?: HrefJSON;
  readonly search?: HrefJSON;
  readonly tournament?: HrefJSON;
  readonly game?: HrefJSON;
  readonly mode?: HrefJSON;
  readonly registration?: HrefJSON;
  readonly user?: HrefJSON;
  readonly admin?: HrefJSON;
}
