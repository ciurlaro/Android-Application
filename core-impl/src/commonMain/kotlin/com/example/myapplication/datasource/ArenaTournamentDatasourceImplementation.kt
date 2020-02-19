package com.example.myapplication.datasource


import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.rawresponses.*
import com.example.myapplication.rawresponses.createresponses.CreateGameJSON
import com.example.myapplication.rawresponses.createresponses.CreateGameModeJSON
import com.example.myapplication.rawresponses.createresponses.CreateRegistrationJSON
import com.example.myapplication.rawresponses.createresponses.CreateTournamentJSON
import io.ktor.client.HttpClient
import io.ktor.client.request.HttpRequestBuilder
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.HttpHeaders
import io.ktor.http.Url
import io.ktor.util.InternalAPI
import io.ktor.util.encodeBase64
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.json.Json

@UnstableDefault
@InternalAPI
class ArenaTournamentDatasourceImplementation(
    private val httpClient: HttpClient,
    private val endpoints: ArenaTournamentDatasource.Endpoints,
    private val firebaseAuthDS: FirebaseAuthDatasource
) : ArenaTournamentDatasource {

    override suspend fun createGameMode(gameModeJSON: CreateGameModeJSON): ModeJSON =
        with(gameModeJSON) {
            httpClient.authenticatedPost(
                endpoints.createGameModeUrl(),
                Json.stringify(CreateGameModeJSON.serializer(), this)
            )
        }

    override suspend fun createGame(gameJSON: CreateGameJSON): GameJSON =
        with(gameJSON) {
            httpClient.authenticatedPost(
                endpoints.createGameUrl(),
                Json.stringify(CreateGameJSON.serializer(), this)
            )
        }

    override suspend fun createTournament(tournamentJSON: CreateTournamentJSON): TournamentJSON =
        with(tournamentJSON) {
            httpClient.authenticatedPost(
                endpoints.createTournamentUrl(),
                Json.stringify(CreateTournamentJSON.serializer(), this)
            )
        }


    override suspend fun createRegistration(registrationJSON: CreateRegistrationJSON): RegistrationJSON =
        with(registrationJSON) {
            httpClient.authenticatedPost(
                endpoints.createRegistrationUrl(),
                Json.stringify(CreateRegistrationJSON.serializer(), this)
            )
        }

    override suspend fun getAllGames(page: Int): MultipleGamesJSON =
        httpClient.get(endpoints.allGamesUrl(page))

    override suspend fun getGameByName(gameName: String): GameJSON =
        httpClient.get(endpoints.gameByNameUrl(gameName))

    override suspend fun getGameByLink(link: String): GameJSON =
        httpClient.get(link)

    override suspend fun searchGamesByName(query: String, page: Int): MultipleGamesJSON =
        httpClient.get(endpoints.searchGamesByNameUrl(query, page))

    override suspend fun getGamesContainingName(gameName: String, page: Int): MultipleGamesJSON =
        httpClient.get(endpoints.gamesContainingNameUrl(gameName, page))

    override suspend fun getGamesByMode(mode: String, page: Int): MultipleGamesJSON =
        httpClient.get(endpoints.gamesByModeUrl(mode, page))


    override suspend fun getTournamentById(id: Long): TournamentJSON =
        httpClient.get(endpoints.tournamentByIdUrl(id))

    override suspend fun getTournamentByLink(link: String): TournamentJSON =
        httpClient.get(link)

    override suspend fun getTournamentsByMode(mode: String, page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.tournamentsByModeUrl(mode, page))

    override suspend fun getAllTournaments(page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.allTournamentsUrl(page))

    override suspend fun getTournamentsByGameName(
        gameName: String,
        page: Int
    ): MultipleTournamentsJSON =
        httpClient.get(endpoints.tournamentsByGameName(gameName, page))

    override suspend fun getTournamentsByUser(userId: String, page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.tournamentsByAdmin(userId, page))

    override suspend fun searchTournamentsByName(name: String, page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.searchTournamentsByNameUrl(name, page))

    override suspend fun getShowCaseTournaments(page: Int): MultipleTournamentsJSON =
        httpClient.get(endpoints.getShowCaseTournaments(page))

    override suspend fun getTournamentsContainingTitle(
        title: String,
        page: Int
    ): MultipleTournamentsJSON =
        httpClient.get(endpoints.getTournamentsContainingTitle(title, page))

    override suspend fun getRegistrationById(id: Long): RegistrationJSON =
        httpClient.get(endpoints.registrationByIdUrl(id))

    override suspend fun getRegistrationByLink(link: String): RegistrationJSON =
        httpClient.get(link)

    override suspend fun getRegistrationsByUser(
        userId: String,
        page: Int
    ): MultipleRegistrationsJSON =
        httpClient.get(endpoints.registrationsByUserUrl(userId, page))

    override suspend fun getRegistrationsByTournament(
        tournamentId: Long,
        page: Int
    ): MultipleRegistrationsJSON =
        httpClient.get(endpoints.registrationsByTournamentUrl(tournamentId, page))

    override suspend fun getUserById(id: String): UserJSON =
        httpClient.get(endpoints.userByIdUrl(id))

    override suspend fun getUserByLink(link: String): UserJSON =
        httpClient.get(link)

    override suspend fun getAccountVerificationStatus(): AccountStatusJSON =
        httpClient.authenticatedGet(endpoints.isAccountVerifiedUrl())

    override suspend fun getAccountSubscription(): SubscriptionStatusJSON =
        httpClient.authenticatedGet(endpoints.isAccountSubscribedUrl())

    override suspend fun searchTournaments(title: String, gameId: String?, page: Int): MultipleTournamentsJSON =
        httpClient.authenticatedGet(endpoints.searchTournaments(title, gameId, page))

    private suspend inline fun <reified T> HttpClient.authenticatedGet(url: Url) =
        get<T>(url) {
            addAuth()
        }

    private suspend inline fun <reified T> HttpClient.authenticatedPost(url: Url, content: Any?) =
        post<T>(url) {
            addAuth()
            content?.let { body = it }
        }

    private suspend fun HttpRequestBuilder.addAuth() {
        try {
            header(HttpHeaders.Authorization, "Bearer: ${"${firebaseAuthDS.getToken()}:"}")
        } catch (e: AuthException) {
            println(e)
        }
    }

}