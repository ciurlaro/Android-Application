import {RegistrationJSON} from '../single/registration-json';
import {PageJSON} from '../page-json';
import {LinksJSON} from '../links-json';

export interface MultipleRegistrationsJSON {

  readonly _embedded: MultipleEmbeddedJSON;
  readonly _links: LinksJSON;
  readonly page: PageJSON;
}


export interface MultipleEmbeddedJSON {
  readonly registrationEntities: RegistrationJSON[];
}
