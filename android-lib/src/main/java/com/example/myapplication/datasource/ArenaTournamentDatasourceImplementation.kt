package com.example.myapplication.datasource

import com.example.myapplication.rawresponses.*
import io.ktor.client.HttpClient
import io.ktor.client.request.get
import java.time.LocalDateTime

class ArenaTournamentDatasourceImplementation(
    private val httpClient: HttpClient,
    private val endpoints: ArenaTournamentDatasource.Endpoints
) : ArenaTournamentDatasource {

    override suspend fun getGameByName(name: String): GameJSON =
        httpClient.get(endpoints.gameByNameUrl(name))

    override suspend fun getGameByLink(link: String): GameJSON =
        httpClient.get(link)

    override suspend fun searchGamesByName(query: String, page: Int): MultipleGamesJSON =
        httpClient.get(endpoints.searchGamesByNameUrl(query, page))

    override suspend fun getTournamentById(id: Long): TournamentJSON =
        httpClient.get(endpoints.tournamentByIdUrl(id))

    override suspend fun getTournamentByLink(link: String): TournamentJSON =
        httpClient.get(link)

    override suspend fun getTournamentsByMode(mode: String, page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.tournamentsByModeUrl(mode, page))

    override suspend fun getAllTournaments(page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.allTournamentsUrl(page))

    override suspend fun getTournamentsByGameLink(
        gameLink: String,
        page: Int
    ): MultipleTournamentsJSON =
        httpClient.get(endpoints.tournamentsByGameLinkUrl(gameLink, page))

    override suspend fun searchTournamentsByName(name: String, page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.searchTournamentsByNameUrl(name, page))

    override suspend fun getMatchById(id: Long): MatchJSON =
        httpClient.get(endpoints.matchByIdUrl(id))

    override suspend fun getMatchByLink(link: String): MatchJSON =
        httpClient.get(link)

    override suspend fun getMatchesByTournamentLink(tournamentLink: String, page: Int): MatchJSON =
        httpClient.get(endpoints.matchesByTournamentLinkUrl(tournamentLink, page))

    override suspend fun getMatchesByTournamentId(
        tournamentId: Long,
        page: Int
    ): MultipleMatchJSON =
        httpClient.get(endpoints.matchesByTournamentIdUrl(tournamentId, page))

    override suspend fun getMatchesByGameLink(gameLink: String, page: Int): MultipleMatchJSON =
        httpClient.get(endpoints.matchesByGameLinkUrl(gameLink, page))

    override suspend fun getMatchesByGameId(gameId: Long, page: Int): MultipleMatchJSON =
        httpClient.get(endpoints.matchesByGameIdUrl(gameId, page))

    override suspend fun getMatchesAfterDate(
        dateTime: LocalDateTime,
        page: Int
    ): MultipleMatchJSON =
        httpClient.get(endpoints.matchesAfterDateUrl(dateTime, page))

    override suspend fun getMatchesAvailable(page: Int): MultipleMatchJSON =
        httpClient.get(endpoints.matchesAvailableUrl(page))

    override suspend fun getRegistrationById(id: Long): RegistrationJSON =
        httpClient.get(endpoints.registrationByIdUrl(id))

    override suspend fun getRegistrationByLink(link: String): RegistrationJSON =
        httpClient.get(link)

    override suspend fun getMatchesNotFull(page: Int): MultipleMatchJSON =
        httpClient.get(endpoints.matchesNotFullUrl(page))

    override suspend fun getRegistrationsByUser(
        userId: String,
        page: Int
    ): MultipleRegistrationsJSON =
        httpClient.get(endpoints.registrationsByUserUrl(userId, page))

    override suspend fun getRegistrationsByMatchLink(
        matchLink: String,
        page: Int
    ): MultipleRegistrationsJSON =
        httpClient.get(endpoints.registrationsByMatchLinkUrl(matchLink, page))

    override suspend fun getCurrentUser(): UserJSON =
        httpClient.get(endpoints.currentUserUrl())

    override suspend fun getUserById(id: String): UserJSON =
        httpClient.get(endpoints.userByIdUrl(id))

    override suspend fun getUserByLink(link: String): UserJSON =
        httpClient.get(link)

    override suspend fun getUsersByMatchLink(matchLink: String, page: Int): MultipleUsersJSON =
        httpClient.get(endpoints.usersByMatchLinkUrl(matchLink, page))

    override suspend fun getUsersByMatchId(matchId: Long, page: Int): MultipleUsersJSON =
        httpClient.get(endpoints.usersByMatchIdUrl(matchId, page))

}