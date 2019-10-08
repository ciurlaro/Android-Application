package com.example.myapplication.rawresponses


data class MultipleGamesJSON(
    val _embedded: GameEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

data class GameEmbeddedJSON(
    val gameEntities: List<GameJSON>
)

data class GameJSON(
    val gameName: String,
    val availableModes: String,
    val image: String,
    val _links: LinksJSON
)
