package com.example.myapplication.datasource

import com.example.myapplication.mappers.DateTimeMapper
import com.soywiz.klock.DateTimeTz
import io.ktor.http.*

data class EndpointsImplementation(
    override val protocol: String,
    override val host: String,
    override val port: Int,
    private val dateTimeMapper: DateTimeMapper
) : ArenaTournamentDatasource.Endpoints {

    private fun ParametersBuilder.append(name: String, value: Any) =
        append(name, value.toString())

    private fun buildUrl(path: String, builder: ParametersBuilder.() -> Unit) =
        buildUrl(path, Parameters.build(builder))

    private fun buildUrl(path: String, parameters: Parameters = parametersOf()) =
        Url(URLProtocol(protocol, port), host, port, path, parameters, "", null, null, false)

    /*
    * Post endpoints
    * */
    override fun createGameModeUrl() =
        buildUrl("/mode")

    override fun createGameUrl() =
        buildUrl("/game")

    override fun createMatchUrl() =
        buildUrl("/match")

    override fun createRegistrationUrl() =
        buildUrl("/registration")

    override fun createTournamentUrl() =
        buildUrl("/tournament")

    override fun createUserUrl() =
        buildUrl("/createUser")


    /*
    * Get endpoints
    * */
    override fun allGamesUrl(page: Int) =
        buildUrl("/game") {
            append("page", page)
        }

    override fun gameByNameUrl(name: String) =
        buildUrl("/game/$name")

    override fun searchGamesByNameUrl(query: String, page: Int) =
        buildUrl("/game/search/byGameName") {
            append("gameName", query)
            append("page", page)
        }

    override fun gamesContainingNameUrl(gameName: String, page: Int) =
        buildUrl("/game/search/containingGameName") {
            append("gameName", gameName)
            append("page", page)
        }

    override fun gamesByModeUrl(mode: String, page: Int) =
        buildUrl("/game/search/byMode") {
            append("available_modes_mode_name", mode)
            append("page", page)
        }


    override fun allTournamentsUrl(page: Int) =
        buildUrl("/tournament") {
            append("page", page)
        }

    override fun tournamentByIdUrl(id: Long) =
        buildUrl("/tournament/$id")

    override fun tournamentsByGameName(gameName: String, page: Int) =
        buildUrl("/tournament/search/byGame") {
            append("gameName", gameName)
            append("page", page)
        }

    override fun tournamentsByModeUrl(mode: String, page: Int) =
        buildUrl("/tournament/search/byMode") {
            append("tournamentMode", mode)
            append("page", page)
        }

    override fun tournamentsByAdmin(userId: String, page: Int) =
        buildUrl("/tournament/search/byUserId") {
            append("admin", userId)
            append("page", page)
        }

    //TODO: to implement server side
    override fun searchTournamentsByNameUrl(query: String, page: Int) =
        buildUrl("/tournament/search/byName") {
            append("title", query)
            append("page", page)
        }

    //TODO: to implement server side
    override fun getShowCaseTournaments(page: Int) =
        buildUrl("/tournament/search/byShowCase") {
            append("page", page)
        }

    override fun getTournamentsContainingTitle(title: String, page: Int) =
        buildUrl("/tournament/search/containingTitle") {
            append("title", title)
            append("page", page)
        }

    override fun matchByIdUrl(id: Long) =
        buildUrl("/match/$id")

    override fun matchesByTournamentIdUrl(tournamentId: Long, page: Int) =
        buildUrl("/match/search/byTournamentId") {
            append("tournamentId", tournamentId)
            append("page", page)
        }

    override fun matchesByGameNameUrl(gameName: String, page: Int) =
        buildUrl("/match/search/byGameId") {
            append("gameName", gameName)
            append("page", page)
        }

    override fun allMatchesUrl(page: Int) =
        buildUrl("/match") {
            append("page", page)
        }

    override fun matchesAfterDateUrl(dateTime: DateTimeTz, page: Int) =
        buildUrl("/match/search/byMatchDateTimeIsAfter") {
            append("matchDateTime", dateTimeMapper.toRemoteSingle(dateTime))
            append("page", page)
        }

    override fun matchesByUserIdUrl(userId: String, page: Int): Url =
        buildUrl("/match/search/byUserId") {
            append("userId", userId)
            append("page", page)
        }

    //TODO: current time server side
    override fun matchesAvailableUrl(page: Int) =
        buildUrl("/match/search/availableMatches") {
            append("page", page)
        }

    override fun matchesNotFullUrl(page: Int) =
        buildUrl("/match/search/notFull") {
            append("page", page)
        }

    override fun allRegistrationsUrl(page: Int) =
        buildUrl("/registration") {
            append("page", page)
        }

    override fun registrationByIdUrl(id: Long) =
        buildUrl("/registration/$id")

    override fun registrationsByUserUrl(userId: String, page: Int) =
        buildUrl("/registration/search/byUserId") {
            append("userId", userId)
            append("page", page)
        }

    override fun registrationsByMatchIdUrl(matchId: Long, page: Int) =
        buildUrl("/registration/search/byMatchId") {
            append("matchId", matchId)
            append("page", page)
        }

    override fun registrationsByUserIdUrlAndMatchIdUrl(userId: String, matchId: Long, page: Int) =
        buildUrl("/registration/search/byUserIdAndMatchId") {
            append("userId", userId)
            append("matchId", matchId)
            append("page", page)
        }

    override fun userByIdUrl(userId: String) =
        buildUrl("/user/$userId")

    override fun usersByMatchIdUrl(matchId: Long, page: Int) =
        buildUrl("/user/search/byMatchId") {
            append("matchId", matchId)
            append("page", page)
        }

    override fun isAccountVerifiedUrl() =
        buildUrl("isAccountVerified")

    override fun isAccountSubscribedUrl() =
        buildUrl("isAccountSubscribed")

    override fun searchTournaments(title: String, gameId: String?, page: Int) =
        buildUrl("tournament/search/byNameAndGames") {
            append("title", title)
            gameId?.let { append("gameIds", gameId) }
        }
}