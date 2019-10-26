package com.example.myapplication.repositories


import com.example.myapplication.entities.*
import com.soywiz.klock.DateTimeTz
import kotlinx.coroutines.flow.Flow

interface ArenaTournamentRepository {

    suspend fun createGameMode(modeName: String): ModeEntity

    suspend fun createGame(
        name: String,
        availableModes: List<String>,
        image: String,
        icon: String
    ): GameEntity

    suspend fun createMatch(
        matchDateTime: DateTimeTz,
        playersCount: Int,
        isRegistrationPossible: Boolean,
        tournament: TournamentEntity
    ): MatchEntity

    suspend fun createRegistration(
        user: UserEntity,
        match: MatchEntity,
        outcome: String? = null
    ): RegistrationEntity

    suspend fun createTournament(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ): TournamentEntity

    suspend fun createUser(
        email: String,
        password: String,
        nickname: String,
        image: String
    ): UserEntity


    suspend fun getGameByName(name: String): GameEntity
    fun searchGameByName(name: String, page: Int): Flow<GameEntity>
    fun getGamesContainingName(name: String, page: Int): Flow<GameEntity>
    fun getGamesByMode(mode: String, page: Int): Flow<GameEntity>


    suspend fun getTournamentById(id: Long): TournamentEntity
    fun getTournamentsByMode(mode: String, page: Int): Flow<TournamentEntity>
    fun getTournamentsByGame(gameName: String, page: Int): Flow<TournamentEntity>
    fun getTournamentsByUser(userId: String, page: Int): Flow<TournamentEntity>
    fun getShowCaseTournaments(page: Int): Flow<TournamentEntity>
    fun getTournamentsContainingTitle(title: String, page: Int): Flow<TournamentEntity>


    suspend fun getMatchById(id: Long): MatchEntity
    fun getMatchesByTournament(tournamentId: Long, page: Int): Flow<MatchEntity>
    fun getMatchesByGame(gameName: String, page: Int): Flow<MatchEntity>
    fun getMatchesAfterDate(dateTime: DateTimeTz, page: Int): Flow<MatchEntity>
    fun getMatchesAvailable(page: Int): Flow<MatchEntity>
    fun getMatchesByUser(userId: String, page: Int): Flow<MatchEntity>

    suspend fun getRegistrationById(id: Long): RegistrationEntity
    fun getRegistrationsByMatch(matchId: Long, page: Int): Flow<RegistrationEntity>
    fun getRegistrationsByUser(userId: String, page: Int): Flow<RegistrationEntity>

    suspend fun getUserById(id: String): UserEntity
    suspend fun getCurrentUser(): UserEntity
    suspend fun isAccountVerified(): Boolean
    suspend fun isAccountSubscribed(): Boolean

}