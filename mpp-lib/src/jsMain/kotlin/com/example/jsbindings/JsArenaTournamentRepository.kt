package com.example.jsbindings

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.soywiz.klock.DateTimeTz
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsArenaTournamentRepository(
    private val repo: ArenaTournamentRepository
) {
    fun getGameByName(name: String) =
        GlobalScope.promise { repo.getGameByName(name) }

    fun searchGameByName(name: String, page: Int) =
        GlobalScope.promise { repo.searchGameByName(name, page) }

    fun getTournamentById(id: Long) =
        GlobalScope.promise { repo.getTournamentById(id) }

    fun getTournamentsByMode(mode: String, page: Int) =
        GlobalScope.promise { repo.getTournamentsByMode(mode, page) }

    fun getTournamentsByGame(gameName: String, page: Int) =
        GlobalScope.promise { repo.getTournamentsByGame(gameName, page) }

    fun getMatchById(id: Long) =
        GlobalScope.promise { repo.getMatchById(id) }

    fun getMatchesByTournament(tournamentId: Long, page: Int) =
        GlobalScope.promise { repo.getMatchesByTournament(tournamentId, page) }

    fun getMatchesByGameName(gameName: String, page: Int) =
        GlobalScope.promise { repo.getMatchesByGame(gameName, page) }

    fun getMatchesAfterDate(dateTime: DateTimeTz, page: Int) =
        GlobalScope.promise { repo.getMatchesAfterDate(dateTime, page) }

    fun getRegistrationById(id: Long) =
        GlobalScope.promise { repo.getRegistrationById(id) }

    fun getRegistrationByMatch(matchId: Long, page: Int) =
        GlobalScope.promise { repo.getRegistrationByMatch(matchId, page) }

    fun getRegistrationsByUser(userId: String, page: Int) =
        GlobalScope.promise { repo.getRegistrationsByUser(userId, page) }

    fun getUserById(id: String) =
        GlobalScope.promise { repo.getUserById(id) }

    fun getCurrentUser() =
        GlobalScope.promise { repo.getCurrentUser() }

    fun isAccountVerified() =
        GlobalScope.promise { repo.isAccountVerified() }
}