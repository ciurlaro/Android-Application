package com.example.myapplication.repositories

import com.example.myapplication.data.*
import java.time.LocalDateTime

interface EntityRepository {

    fun getGameByName(name: String): GameEntity

    fun getTournamentById(id: Long): TournamentEntity
    fun getTournamentsByMode(id: Long): List<TournamentEntity>
    fun getTournamentsByGame(gameName: String): List<TournamentEntity>

    fun getMatchById(id: Long): MatchEntity
    fun getMatchesByTournament(tournamentId: Long): List<TournamentEntity>
    fun getMatchesByGame(gameName: String): List<TournamentEntity>
    fun getMatchesAfterDate(dateTime: LocalDateTime): List<TournamentEntity>

    fun getRegistrationById(id: Long): RegistrationEntity
    fun getRegistrationByMatch(matchId: Long): List<RegistrationEntity>
    fun getRegistrationsByUser(userId: String): List<RegistrationEntity>

    fun getUserById(id: String): UserEntity

}