import {GameJSON} from "../single/game-json";
import {LinksJSON} from "../links-json";
import {PageJSON} from "../page-json";

export interface MultipleGamesJSON {
  readonly _embedded: GameEmbeddedJSON;
  readonly  _links: LinksJSON;
  readonly  page: PageJSON
}

class GameEmbeddedJSON {
  public readonly gameEntities: GameJSON[]
}
