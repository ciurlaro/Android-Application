package com.example.myapplication.datasource

import com.example.myapplication.rawresponses.*
import java.time.LocalDateTime

interface ArenaTournamentDatasource {

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
    suspend fun getMatchesAfterDate(dateTime: LocalDateTime, page: Int): MultipleMatchJSON
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

    interface Endpoints {

        val protocol: String
        val host: String
        val port: Int

        fun allGamesUrl(page: Int): String
        fun gameByNameUrl(name: String): String
        fun searchGamesByNameUrl(query: String, page: Int): String

        fun allTournamentsUrl(page: Int): String
        fun tournamentByIdUrl(id: Long): String
        fun tournamentsByGameLinkUrl(gameLink: String, page: Int): String
        fun tournamentsByModeUrl(mode: String, page: Int): String
        fun searchTournamentsByNameUrl(query: String, page: Int): String

        fun matchByIdUrl(id: Long): String
        fun matchesByTournamentLinkUrl(tournamentLink: String, page: Int): String
        fun matchesByTournamentIdUrl(tournamentId: Long, page: Int): String
        fun matchesByGameLinkUrl(gameLink: String, page: Int): String
        fun matchesByGameIdUrl(gameId: Long, page: Int): String
        fun allMatchesUrl(page: Int): String
        fun matchesAfterDateUrl(dateTime: LocalDateTime, page: Int): String
        fun matchesAvailableUrl(page: Int): String

        fun allRegistrationsUrl(page: Int): String
        fun registrationByIdUrl(id: Long): String
        fun matchesNotFullUrl(page: Int): String
        fun registrationsByUserUrl(userId: String, page: Int): String
        fun registrationsByMatchLinkUrl(matchLink: String, page: Int): String
        fun registrationsByMatchIdUrl(matchId: Long, page: Int): String

        fun currentUserUrl(): String
        fun userByIdUrl(userId: String): String
        fun usersByMatchLinkUrl(matchLink: String, page: Int): String
        fun usersByMatchIdUrl(matchId: Long, page: Int): String

    }
}