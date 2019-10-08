package com.example.myapplication.rawresponses

data class MultipleTournamentsJSON(
    val _embedded: TournamentEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

data class TournamentEmbeddedJSON(
    val tournamentEntities: List<TournamentJSON>
)

data class TournamentJSON(
    val id: Long,
    val playersNumber: Int,
    val tournamentDescription: String,
    val tournamentMode: String,
    val adminId: Long,
    val gameId: String,
    val title: String,
    val _links: LinksJSON
)