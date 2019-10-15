package com.example.myapplication.datasource

import com.example.myapplication.mappers.DateTimeMapper
import com.soywiz.klock.DateTimeTz
import io.ktor.http.Parameters
import io.ktor.http.URLProtocol
import io.ktor.http.Url

data class EndpointsImplementation(
    override val protocol: String,
    override val host: String,
    override val port: Int,
    private val dateTimeMapper: DateTimeMapper
) : ArenaTournamentDatasource.Endpoints {

    private fun parametersOf(vararg headers: Pair<String, Any>) =
        io.ktor.http.parametersOf(*headers.map { it.first to listOf(it.second.toString()) }.toTypedArray())

    private fun buildUrl(path: String, parameters: Parameters = parametersOf()) =
        Url(URLProtocol(protocol, port), host, port, path, parameters, "", null, null, false)

    override fun allGamesUrl(page: Int) =
        buildUrl("/game", parametersOf("page" to page))

    override fun gameByNameUrl(name: String) =
        buildUrl("/game/$name")

    override fun searchGamesByNameUrl(query: String, page: Int) =
        buildUrl("/game/search/byGameName", parametersOf("gameName" to query, "page" to page))


    override fun gamesContainingName(gameName: String, page: Int) =
        buildUrl(
            "/game/search/containingGameName",
            parametersOf("gameName" to gameName, "page" to page)
        )

    override fun gamesByMode(mode: String, page: Int) =
        buildUrl(
            "/game/search/byMode",
            parametersOf("available_modes_mode_name" to mode, "page" to page)
        )


    override fun allTournamentsUrl(page: Int) =
        buildUrl("/tournament", parametersOf("page" to page))

    override fun tournamentByIdUrl(id: Long) =
        buildUrl("/tournament/$id")

    override fun tournamentsByGameName(gameName: String, page: Int) =
        buildUrl("/tournament/search/byGame", parametersOf("gameName" to gameName, "page" to page))

    override fun tournamentsByModeUrl(mode: String, page: Int) =
        buildUrl(
            "/tournament/search/byMode",
            parametersOf("tournamentMode" to mode, "page" to page)
        )

    /*
        A cui ha partecipato o che gestisce? Non chiaro il nome
     */
    override fun tournamentsByUserId(userId: String, page: Int) =
        buildUrl("/tournament/search/byUserId", parametersOf("admin" to userId, "page" to page))

    //TODO: to implement server side
    override fun searchTournamentsByNameUrl(query: String, page: Int) =
        buildUrl(
            "/tournament/search/byName",
            parametersOf("title" to query, "page" to page)
        )

    override fun getShowCaseTournaments(page: Int) =
        buildUrl("/tournament/search/byShowCase", parametersOf("page" to page))

    override fun getTournamentsContainingTitle(title: String, page: Int) =
        buildUrl(
            "/tournament/search/containingTitle",
            parametersOf("title" to title, "page" to page)
        )


    override fun matchByIdUrl(id: Long) =
        buildUrl("/match/$id")


    override fun matchesByTournamentIdUrl(tournamentId: Long, page: Int) =
        buildUrl(
            "/match/search/byTournamentId",
            parametersOf("tournamentId" to tournamentId, "page" to page)
        )

    override fun matchesByGameNameUrl(gameName: String, page: Int) =
        buildUrl("/match/search/byGameId", parametersOf("gameName" to gameName, "page" to page))

    override fun allMatchesUrl(page: Int) =
        buildUrl("/match", parametersOf("page" to page))

    override fun matchesAfterDateUrl(dateTime: DateTimeTz, page: Int) =
        buildUrl(
            "/match/search/byMatchDateTimeIsAfter",
            parametersOf("matchDateTime" to dateTimeMapper.toRemote(dateTime), "page" to page)
        )

    override fun matchesByUserIdUrl(userId: String, page: Int): Url =
        buildUrl("/match/search/byUserId", parametersOf("userId" to userId, "page" to page))

    //TODO: current time server side
    override fun matchesAvailableUrl(page: Int) =
        buildUrl("/match/search/availableMatches", parametersOf("page" to page))

    override fun matchesNotFullUrl(page: Int) =
        buildUrl("/match/search/notFull", parametersOf("page" to page))

    override fun allRegistrationsUrl(page: Int) =
        buildUrl("/registration", parametersOf("page" to page))

    override fun registrationByIdUrl(id: Long) =
        buildUrl("/registration/$id")


    override fun registrationsByUserUrl(userId: String, page: Int) =
        buildUrl("/registration/search/byUserId", parametersOf("userId" to userId, "page" to page))

    override fun registrationsByMatchIdUrl(matchId: Long, page: Int) =
        buildUrl(
            "/registration/search/byMatchId",
            parametersOf("matchId" to matchId, "page" to page)
        )

    override fun currentUserUrl() =
        buildUrl("/currentUser")

    override fun userByIdUrl(userId: String) =
        buildUrl("/user/$userId")

    override fun usersByMatchIdUrl(matchId: Long, page: Int) =
        buildUrl("/user/search/byMatchId", parametersOf("matchId" to matchId, "page" to page))

    override fun isAccountVerifiedUrl() =
        buildUrl("isAccountVerified")
}