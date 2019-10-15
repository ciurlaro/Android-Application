package com.example.myapplication.datasource

import com.example.myapplication.rawresponses.*
import com.example.myapplication.rawresponses.createresponces.*
import com.soywiz.klock.DateFormat
import com.soywiz.klock.DateTimeTz
import io.ktor.http.Url

interface ArenaTournamentDatasource {

    companion object {
        val DEFAULT_DATE_TIME_PATTERN = DateFormat("yyyy-MM-dd'T'HH:mm:ss")
    }


    val tokenFactory: TokenFactory

    suspend fun createGameMode(modeName: String): ModeJSON
    suspend fun createGame(gameJSON: CreateGameJSON): GameJSON
    suspend fun createMatch(matchJSON: CreateMatchJSON): MatchJSON
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

    suspend fun getMatchById(id: Long): MatchJSON
    suspend fun getMatchByLink(link: String): MatchJSON
    suspend fun getMatchesByGameName(gameName: String, page: Int): MultipleMatchJSON
    suspend fun getMatchesByUser(userId: String, page: Int): MultipleMatchJSON
    suspend fun getMatchesAfterDate(dateTime: DateTimeTz, page: Int): MultipleMatchJSON
    suspend fun getMatchesAvailable(page: Int): MultipleMatchJSON
    suspend fun getMatchesByTournamentId(tournamentId: Long, page: Int): MultipleMatchJSON
    suspend fun getMatchesNotFull(page: Int): MultipleMatchJSON

    suspend fun getRegistrationById(id: Long): RegistrationJSON
    suspend fun getRegistrationByLink(link: String): RegistrationJSON
    suspend fun getRegistrationsByUser(userId: String, page: Int): MultipleRegistrationsJSON
    suspend fun getRegistrationsByMatchId(matchId: Long, page: Int): MultipleRegistrationsJSON

    suspend fun getCurrentUser(): UserJSON
    suspend fun getUserById(id: String): UserJSON
    suspend fun getUserByLink(link: String): UserJSON
    suspend fun getUsersByMatchId(matchId: Long, page: Int): MultipleUsersJSON
    suspend fun getAccountVerificationStatus(): AccountStatusJSON
    suspend fun getAccountSubscription(): SubscriptionStatusJSON

    interface Endpoints {

        val protocol: String
        val host: String
        val port: Int

        fun createGameUrl(name: String, availableModes: List<String>, image: String, icon: String): Url
        fun createMatchUrl(matchDateTime: DateTimeTz, playersCount: Int, isRegistrationPossible: Boolean, tournamentLink: Url): Url
        fun createGameModeUrl(modeName: String): Url
        fun createRegistrationUrl(userLink: Url, matchLink: Url, outcome: String?): Url
        fun createTournamentUrl(playersNumber: Int, title: String, tournamentDescription: String, tournamentMode: String, adminLink: Url, gameLink: Url): Url
        fun createUserUrl(email: String, password: String, nickname: String, image: String): Url


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

        fun matchByIdUrl(id: Long): Url
        fun matchesByTournamentIdUrl(tournamentId: Long, page: Int): Url
        fun matchesByGameNameUrl(gameName: String, page: Int): Url
        fun matchesByUserIdUrl(userId: String, page: Int): Url
        fun allMatchesUrl(page: Int): Url
        fun matchesAfterDateUrl(dateTime: DateTimeTz, page: Int): Url
        fun matchesAvailableUrl(page: Int): Url

        fun allRegistrationsUrl(page: Int): Url
        fun registrationByIdUrl(id: Long): Url
        fun matchesNotFullUrl(page: Int): Url
        /**
         * UserUrl oppure UserIdUrl
         */
        fun registrationsByUserUrl(userId: String, page: Int): Url

        fun registrationsByMatchIdUrl(matchId: Long, page: Int): Url

        fun currentUserUrl(): Url
        fun userByIdUrl(userId: String): Url
        fun usersByMatchIdUrl(matchId: Long, page: Int): Url
        fun isAccountVerifiedUrl(): Url
        fun isAccountSubscribedUrl(): Url

    }
}