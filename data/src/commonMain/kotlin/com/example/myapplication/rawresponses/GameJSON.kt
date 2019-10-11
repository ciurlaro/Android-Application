package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class MultipleGamesJSON(
    val _embedded: GameEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

@Serializable
data class GameEmbeddedJSON(
    val gameEntities: List<GameJSON>
)

@Serializable
data class GameJSON(
    val gameName: String,
    val availableModes: List<String>,
    val image: String,
    val _links: LinksJSON,
    val icon: String
)
