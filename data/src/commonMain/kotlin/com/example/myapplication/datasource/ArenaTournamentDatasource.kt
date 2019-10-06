package com.example.myapplication.datasource

import com.example.myapplication.rawresponses.*
import com.soywiz.klock.DateFormat
import com.soywiz.klock.DateTimeTz
import io.ktor.http.Url

interface ArenaTournamentDatasource {

    @Suppress("PropertyName")
    val DEFAULT_DATE_TIME_PATTERN: DateFormat

    val tokenFactory: TokenFactory

    suspend fun getGameByName(name: String): GameJSON
    suspend fun getGameByLink(link: String): GameJSON
    suspend fun searchGamesByName(query: String, page: Int): MultipleGamesJSON

    suspend fun getTournamentById(id: Long): TournamentJSON
    suspend fun getTournamentByLink(link: String): TournamentJSON
    suspend fun getTournamentsByMode(mode: String, page: Int): MultipleTournamentsJSON
    suspend fun getAllTournaments(page: Int): MultipleTournamentsJSON
    suspend fun getTournamentsByGameLink(gameLink: String, page: Int): MultipleTournamentsJSON
    suspend fun searchTournamentsByName(name: String, page: Int): MultipleTournamentsJSON

    suspend fun getMatchById(id: Long): MatchJSON
    suspend fun getMatchByLink(link: String): MatchJSON
    suspend fun getMatchesByTournamentLink(tournamentLink: String, page: Int): MatchJSON
    suspend fun getMatchesByGameLink(gameLink: String, page: Int): MultipleMatchJSON
    suspend fun getMatchesByGameId(gameId: Long, page: Int): MultipleMatchJSON
    suspend fun getMatchesAfterDate(dateTime: DateTimeTz, page: Int): MultipleMatchJSON
    suspend fun getMatchesAvailable(page: Int): MultipleMatchJSON
    suspend fun getMatchesByTournamentId(tournamentId: Long, page: Int): MultipleMatchJSON

    suspend fun getRegistrationById(id: Long): RegistrationJSON
    suspend fun getRegistrationByLink(link: String): RegistrationJSON
    suspend fun getMatchesNotFull(page: Int): MultipleMatchJSON
    suspend fun getRegistrationsByUser(userId: String, page: Int): MultipleRegistrationsJSON
    suspend fun getRegistrationsByMatchLink(matchLink: String, page: Int): MultipleRegistrationsJSON

    suspend fun getCurrentUser(): UserJSON
    suspend fun getUserById(id: String): UserJSON
    suspend fun getUserByLink(link: String): UserJSON
    suspend fun getUsersByMatchLink(matchLink: String, page: Int): MultipleUsersJSON
    suspend fun getUsersByMatchId(matchId: Long, page: Int): MultipleUsersJSON

    suspend fun getAccountVerificationStatus(): AccountStatusJSON

    interface Endpoints {

        val protocol: String
        val host: String
        val port: Int

        fun allGamesUrl(page: Int): Url
        fun gameByNameUrl(name: String): Url
        fun searchGamesByNameUrl(query: String, page: Int): Url

        fun allTournamentsUrl(page: Int): Url
        fun tournamentByIdUrl(id: Long): Url
        fun tournamentsByGameLinkUrl(gameLink: String, page: Int): Url
        fun tournamentsByModeUrl(mode: String, page: Int): Url
        fun searchTournamentsByNameUrl(query: String, page: Int): Url

        fun matchByIdUrl(id: Long): Url
        fun matchesByTournamentLinkUrl(tournamentLink: String, page: Int): Url
        fun matchesByTournamentIdUrl(tournamentId: Long, page: Int): Url
        fun matchesByGameLinkUrl(gameLink: String, page: Int): Url
        fun matchesByGameIdUrl(gameId: Long, page: Int): Url
        fun allMatchesUrl(page: Int): Url
        fun matchesAfterDateUrl(dateTime: DateTimeTz, page: Int): Url
        fun matchesAvailableUrl(page: Int): Url

        fun allRegistrationsUrl(page: Int): Url
        fun registrationByIdUrl(id: Long): Url
        fun matchesNotFullUrl(page: Int): Url
        fun registrationsByUserUrl(userId: String, page: Int): Url
        fun registrationsByMatchLinkUrl(matchLink: String, page: Int): Url
        fun registrationsByMatchIdUrl(matchId: Long, page: Int): Url

        fun currentUserUrl(): Url
        fun isAccountVerifiedUrl(): Url
        fun userByIdUrl(userId: String): Url
        fun usersByMatchLinkUrl(matchLink: String, page: Int): Url
        fun usersByMatchIdUrl(matchId: Long, page: Int): Url

    }
}