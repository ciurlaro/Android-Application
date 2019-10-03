package com.example.myapplication.rawresponses

data class MultipleTournamentsJSON(
    val _embedded: TournamentEntitiesJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

data class TournamentEntitiesJSON(
    val tournamentEntities: List<TournamentEntityJSON>
)

data class TournamentEntityJSON(
    val id: Long,
    val playersNumber: Int,
    val tournamentDescription: String,
    val tournamentMode: String,
    val adminId: Long,
    val _links: LinksJSON
)

data class LinksJSON(
    val self: HrefJSON,
    val tournamentEntity: HrefJSON? = null,
    val profile: HrefJSON? = null
)

