package com.example.myapplication.datasource

import io.ktor.http.Parameters
import io.ktor.http.URLProtocol
import io.ktor.http.Url
import io.ktor.http.parametersOf
import java.time.LocalDateTime

data class EndpointsImplementation(
    override val protocol: String,
    override val host: String,
    override val port: Int
) : ArenaTournamentDatasource.Endpoints {

    private fun buildUrl(path: String, parameters: Parameters = parametersOf()) =
        Url(URLProtocol(protocol, port), host, port, path, parameters, "", null, null, false)
            .toString()

    override fun allGamesUrl(page: Int) =
        buildUrl("/game", parametersOf("page" to listOf(page.toString())))

    override fun gameByNameUrl(name: String) =
        buildUrl("game")

    override fun searchGamesByNameUrl(query: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun allTournamentsUrl(page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun tournamentByIdUrl(id: Long): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun tournamentsByGameLinkUrl(gameLink: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun tournamentsByModeUrl(mode: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun searchTournamentsByNameUrl(query: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchByIdUrl(id: Long): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesByTournamentLinkUrl(tournamentLink: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesByTournamentIdUrl(tournamentId: Long, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesByGameLinkUrl(gameLink: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesByGameIdUrl(gameId: Long, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun allMatchesUrl(page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesAfterDateUrl(dateTime: LocalDateTime, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesAvailableUrl(page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun allRegistrationsUrl(page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun registrationByIdUrl(id: Long): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun matchesNotFullUrl(page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun registrationsByUserUrl(userId: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun registrationsByMatchLinkUrl(matchLink: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun registrationsByMatchIdUrl(matchId: Long, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun currentUserUrl(): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun userByIdUrl(userId: String): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun usersByMatchLinkUrl(matchLink: String, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun usersByMatchIdUrl(matchId: Long, page: Int): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}