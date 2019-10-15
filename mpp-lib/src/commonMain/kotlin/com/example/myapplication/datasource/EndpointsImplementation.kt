package com.example.myapplication.datasource

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
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

    private fun parametersOf(vararg headers: Pair<String, Any?>) =
        io.ktor.http.parametersOf(*headers.map { it.first to listOf(it.second.toString()) }.toTypedArray())

    private fun buildUrl(path: String, parameters: Parameters = parametersOf()) =
        Url(URLProtocol(protocol, port), host, port, path, parameters, "", null, null, false)


    /*
    * Post endpoints
    * */

    override fun createGameModeUrl(modeName: String) =
        buildUrl("/mode", parametersOf("modeName" to modeName))

    override fun createGameUrl(name: String, availableModes: List<String>, image: String, icon: String) =
        buildUrl("/mode",
            parametersOf("name" to name, "availableModes" to availableModes, "image" to image, "icon" to icon))

    override fun createMatchUrl(matchDateTime: DateTimeTz, playersCount: Int, isRegistrationPossible: Boolean, tournamentLink: Url) =
        buildUrl("/match",
            parametersOf("matchDateTime" to matchDateTime, "playersCount" to playersCount, "isRegistrationPossible" to isRegistrationPossible, "tournament" to tournamentLink))

    override fun createRegistrationUrl(userLink: Url, matchLink: Url, outcome: String?) =
        buildUrl("/registration",
            parametersOf("user" to userLink, "match" to matchLink, "outcome" to outcome))

    override fun createTournamentUrl(playersNumber: Int, title: String, tournamentDescription: String, tournamentMode: String, adminLink: Url, gameLink: Url) =
        buildUrl("/tournament",
            parametersOf("playersNumber" to playersNumber, "title" to title, "tournamentDescription" to tournamentDescription,
                "tournamentMode" to tournamentDescription, "admin" to adminLink, "game" to gameLink))

    override fun createUserUrl(email: String, password: String, nickname: String, image: String) =
        buildUrl("/createUser",
            parametersOf("email" to email, "password" to password, "nickname" to nickname, "image" to image))


    /*
    * Get endpoints
    * */


    override fun allGamesUrl(page: Int) =
        buildUrl("/game", parametersOf("page" to page))

    override fun gameByNameUrl(name: String) =
        buildUrl("/game/$name")


    override fun searchGamesByNameUrl(query: String, page: Int) =
        buildUrl("/game/search/byGameName", parametersOf("gameName" to query, "page" to page))

    override fun gamesContainingNameUrl(gameName: String, page: Int) =
        buildUrl(
            "/game/search/containingGameName",
            parametersOf("gameName" to gameName, "page" to page)
        )

    override fun gamesByModeUrl(mode: String, page: Int) =
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

    override fun tournamentsByAdmin(userId: String, page: Int) =
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
            parametersOf("matchDateTime" to dateTimeMapper.toRemoteSingle(dateTime), "page" to page)
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

    override fun isAccountSubscribedUrl() =
        buildUrl("isAccountSubscribed")

}