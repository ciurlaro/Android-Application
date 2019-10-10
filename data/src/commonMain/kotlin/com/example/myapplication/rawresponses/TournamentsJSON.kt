package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class MultipleTournamentsJSON(
    val _embedded: TournamentEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

@Serializable
data class TournamentEmbeddedJSON(
    val tournamentEntities: List<TournamentJSON>
)

@Serializable
data class TournamentJSON(
    val id: Long,
    val playersNumber: Int,
    val tournamentDescription: String,
    val tournamentMode: String,
    val title: String,
    val _links: LinksJSON
)