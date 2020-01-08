package com.example.myapplication.datasource

import com.example.myapplication.rawresponses.*
import com.example.myapplication.rawresponses.createresponses.*
import io.ktor.http.Url

interface ArenaTournamentDatasource {

    suspend fun createGameMode(gameModeJSON: CreateGameModeJSON): ModeJSON
    suspend fun createGame(gameJSON: CreateGameJSON): GameJSON
    suspend fun createRegistration(registrationJSON: CreateRegistrationJSON): RegistrationJSON
    suspend fun createTournament(tournamentJSON: CreateTournamentJSON): TournamentJSON
    suspend fun createUser(userJSON: CreateUserJSON): UserJSON

    suspend fun getAllGames(page: Int): MultipleGamesJSON
    suspend fun getGameByName(gameName: String): GameJSON
    suspend fun searchGamesByName(query: String, page: Int): MultipleGamesJSON
    suspend fun getGameByLink(link: String): GameJSON
    suspend fun getGamesContainingName(gameName: String, page: Int): MultipleGamesJSON
    suspend fun getGamesByMode(mode: String, page: Int): MultipleGamesJSON

    suspend fun getAllTournaments(page: Int): MultipleTournamentsJSON
    suspend fun getTournamentById(id: Long): TournamentJSON
    suspend fun getTournamentByLink(link: String): TournamentJSON
    suspend fun getTournamentsByMode(mode: String, page: Int): MultipleTournamentsJSON
    suspend fun getTournamentsByGameName(gameName: String, page: Int): MultipleTournamentsJSON
    suspend fun getTournamentsByUser(userId: String, page: Int): MultipleTournamentsJSON
    suspend fun searchTournamentsByName(name: String, page: Int): MultipleTournamentsJSON
    suspend fun getShowCaseTournaments(page: Int): MultipleTournamentsJSON
    suspend fun getTournamentsContainingTitle(title: String, page: Int): MultipleTournamentsJSON

    suspend fun getRegistrationById(id: Long): RegistrationJSON
    suspend fun getRegistrationByLink(link: String): RegistrationJSON
    suspend fun getRegistrationsByUser(userId: String, page: Int): MultipleRegistrationsJSON
    suspend fun getRegistrationsByTournament(tournamentId: Long, page: Int): MultipleRegistrationsJSON

    suspend fun getUserById(id: String): UserJSON
    suspend fun getUserByLink(link: String): UserJSON
    suspend fun getAccountVerificationStatus(): AccountStatusJSON
    suspend fun getAccountSubscription(): SubscriptionStatusJSON
    suspend fun searchTournaments(title: String, gameId: String?, page: Int): MultipleTournamentsJSON

    interface Endpoints {

        val protocol: String
        val host: String
        val port: Int

        fun createGameModeUrl(): Url
        fun createGameUrl(): Url
        fun createRegistrationUrl(): Url
        fun createTournamentUrl(): Url
        fun createUserUrl(): Url


        fun allGamesUrl(page: Int): Url
        fun gameByNameUrl(name: String): Url
        fun searchGamesByNameUrl(query: String, page: Int): Url
        fun gamesContainingNameUrl(gameName: String, page: Int): Url
        fun gamesByModeUrl(mode: String, page: Int): Url


        fun allTournamentsUrl(page: Int): Url
        fun tournamentByIdUrl(id: Long): Url
        fun tournamentsByGameName(gameName: String, page: Int): Url
        fun tournamentsByModeUrl(mode: String, page: Int): Url
        fun tournamentsByAdmin(userId: String, page: Int): Url
        fun searchTournamentsByNameUrl(query: String, page: Int): Url
        fun getShowCaseTournaments(page: Int): Url
        fun getTournamentsContainingTitle(title: String, page: Int): Url

        fun allRegistrationsUrl(page: Int): Url
        fun registrationByIdUrl(id: Long): Url
        fun registrationsByUserUrl(userId: String, page: Int): Url
        fun registrationsByTournamentUrl(tournamentId: Long, page: Int): Url

        fun userByIdUrl(userId: String): Url
        fun isAccountVerifiedUrl(): Url
        fun isAccountSubscribedUrl(): Url
        fun searchTournaments(title: String, gameId: String?, page: Int): Url

    }
}