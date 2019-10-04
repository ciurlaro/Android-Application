package com.example.myapplication.datasource

import com.example.myapplication.rawresponses.*
import java.time.LocalDateTime

interface ArenaTournamentDatasource {

    suspend fun getGameByName(name: String): GameJSON
    suspend fun getGameByLink(link: String): GameJSON
    suspend fun getGameById(id: Long): GameJSON
    suspend fun searchGamesByName(name: String, page: Int): MultipleGamesJSON

    suspend fun getTournamentById(id: Long): TournamentJSON
    suspend fun getTournamentByLink(link: String): TournamentJSON
    suspend fun getTournamentsByMode(mode: String, page: Int): MultipleTournamentsJSON
    suspend fun getAllTournaments(page: Int): MultipleTournamentsJSON
    suspend fun getTournamentByGameLink(gameLink: String, page: Int): MultipleTournamentsJSON

    suspend fun searchTournamentByName(name: String, page: Int): MultipleTournamentsJSON
    suspend fun getMatchById(id: Long): MatchJSON
    suspend fun getMatchByLink(link: String): MatchJSON
    suspend fun getMatchesByTournamentLink(tournamentLink: String): MatchJSON
    suspend fun getMatchesByTournamentId(tournamentId: Long): MultipleMatchJSON
    suspend fun getMatchesByGameLink(gameLink: String, page: Int): MultipleMatchJSON
    suspend fun getMatchesByGameId(gameId: Long, page: Int): MultipleMatchJSON
    suspend fun getMatchesAfterDate(dateTime: LocalDateTime, page: Int): MultipleMatchJSON
    suspend fun getMatchesAvailable(page: Int): MultipleMatchJSON

    suspend fun getRegistrationById(id: Long): RegistrationJSON
    suspend fun getRegistrationByLink(link: String): RegistrationJSON
    suspend fun getMatchesNotFull(page: Int): MultipleMatchJSON
    suspend fun getRegistrationsByUser(userId: String, page: Int): MultipleRegistrationsJSON
    suspend fun getRegistrationsByMatch(matchLink: String, page: Int): MultipleRegistrationsJSON

    suspend fun getCurrentUser(): UserJSON
    suspend fun getUserById(id: String): UserJSON
    suspend fun getUserByLink(link: String): UserJSON
    suspend fun getUsersByMatch(): MultipleUsersJSON

}