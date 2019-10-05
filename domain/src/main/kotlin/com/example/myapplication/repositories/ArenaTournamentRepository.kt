package com.example.myapplication.repositories

import com.example.myapplication.data.*
import java.time.LocalDateTime

interface ArenaTournamentRepository {

    suspend fun getGameByName(name: String): GameEntity
    suspend fun searchGameByName(name: String, page: Int): List<GameEntity>

    suspend fun getTournamentById(id: Long): TournamentEntity
    suspend fun getTournamentsByMode(mode: String, page: Int): List<TournamentEntity>
    suspend fun getTournamentsByGame(gameName: String, page: Int): List<TournamentEntity>

    suspend fun getMatchById(id: Long): MatchEntity
    suspend fun getMatchesByTournament(tournamentId: Long, page: Int): List<MatchEntity>
    suspend fun getMatchesByGame(gameName: String, page: Int): List<MatchEntity>
    suspend fun getMatchesAfterDate(dateTime: LocalDateTime, page: Int): List<MatchEntity>

    suspend fun getRegistrationById(id: Long): RegistrationEntity
    suspend fun getRegistrationByMatch(matchId: Long, page: Int): List<RegistrationEntity>
    suspend fun getRegistrationsByUser(userId: String, page: Int): List<RegistrationEntity>

    suspend fun getUserById(id: String): UserEntity
    suspend fun getCurrentUser(): UserEntity

    suspend fun isAccountVerified(): Boolean

}