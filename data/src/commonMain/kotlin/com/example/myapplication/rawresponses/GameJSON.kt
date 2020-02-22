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
    val image: String,
    val icon: String,
    val svgIcon: String,
    val _links: LinksJSON
)
