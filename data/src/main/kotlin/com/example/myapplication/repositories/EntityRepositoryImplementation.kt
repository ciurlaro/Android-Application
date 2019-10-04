package com.example.myapplication.repositories

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.mappers.*
import com.example.myapplication.rawresponses.*
import com.example.myapplication.utils.Quadruple
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import java.time.LocalDateTime

class EntityRepositoryImplementation private constructor(
    private val atDS: ArenaTournamentDatasource,
    private val gameMapper: GameMapper,
    private val matchMapper: MatchMapper,
    private val tournamentMapper: TournamentMapper,
    private val registrationMapper: RegistrationMapper,
    private val userMapper: UserMapper,
    private val tournamentSplitter: Splitter<MultipleTournamentsJSON, TournamentJSON>,
    private val matchSplitter: Splitter<MultipleMatchJSON, MatchJSON>,
    private val registrationSplitter: Splitter<MultipleRegistrationsJSON, RegistrationJSON>
) : EntityRepository {

    override suspend fun getGameByName(name: String) =
        atDS.getGameByName(name)
            .let { gameMapper.fromRemoteSingle(it) }

    override suspend fun searchGameByName(name: String, page: Int) =
        atDS.searchGamesByName(name, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getTournamentById(id: Long) =
        atDS.getTournamentById(id)
            .let { it to atDS.getGameByName(it.gameId) }
            .let { tournamentMapper.fromRemoteSingle(it) }

    override suspend fun getTournamentsByMode(mode: String, page: Int) =
        atDS.getTournamentsByMode(mode, page)
            .transformTournaments()

    override suspend fun getTournamentsByGame(gameName: String, page: Int) =
        atDS.getGameByName(gameName)
            .let { atDS.getTournamentsByGameLink(it._links.self.href, page) }
            .transformTournaments()

    override suspend fun getMatchById(id: Long) =
        atDS.getMatchById(id)
            .let { it to atDS.getTournamentByLink(it._links.tournamentEntity!!.href) }
            .let {
                Triple(
                    it.first,
                    it.second,
                    atDS.getGameByLink(it.second._links.gameEntity!!.href)
                )
            }
            .let { matchMapper.fromRemoteSingle(it) }

    override suspend fun getMatchesByTournament(
        tournamentId: Long,
        page: Int
    ) = atDS.getMatchesByTournamentId(tournamentId, page)
        .transformMatches()

    override suspend fun getMatchesByGame(gameName: String, page: Int) =
        atDS.getGameByName(gameName)
            .let { atDS.getMatchesByGameLink(it._links.self.href, page) }
            .transformMatches()

    override suspend fun getMatchesAfterDate(
        dateTime: LocalDateTime,
        page: Int
    ) = atDS.getMatchesAfterDate(dateTime, page)
        .transformMatches()

    override suspend fun getRegistrationById(id: Long) =
        atDS.getRegistrationById(id)
            .let { it to atDS.getMatchByLink(it._links.matchEntity!!.href) }
            .let {
                Triple(
                    it.first,
                    it.second,
                    atDS.getTournamentByLink(it.second._links.tournamentEntity!!.href)
                )
            }
            .let {
                Quadruple(
                    it.first,
                    it.second,
                    it.third,
                    atDS.getGameByLink(it.third._links.gameEntity!!.href)
                )
            }
            .let { registrationMapper.fromRemoteSingle(it) }

    override suspend fun getRegistrationByMatch(
        matchId: Long,
        page: Int
    ) = atDS.getMatchById(matchId)
        .let { atDS.getRegistrationsByMatchLink(it._links.registrationEntity!!.href, page) }
        .transformRegistrations()


    override suspend fun getRegistrationsByUser(
        userId: String,
        page: Int
    ) = atDS.getRegistrationsByUser(userId, page)
        .transformRegistrations()

    override suspend fun getUserById(id: String) =
        atDS.getCurrentUser()
            .let { userMapper.fromRemoteSingle(it) }

    override suspend fun getCurrentUser() =
        atDS.getCurrentUser()
            .let { userMapper.fromRemoteSingle(it) }

    private suspend fun MultipleTournamentsJSON.transformTournaments() =
        tournamentSplitter(this)
            .asFlow()
            .map { it to atDS.getGameByName(it.gameId) }
            .map { tournamentMapper.fromRemoteSingle(it) }
            .toList()

    private suspend fun MultipleMatchJSON.transformMatches() =
        matchSplitter(this)
            .asFlow()
            .map { it to atDS.getTournamentByLink(it._links.tournamentEntity!!.href) }
            .map {
                Triple(
                    it.first,
                    it.second,
                    atDS.getGameByLink(it.second._links.gameEntity!!.href)
                )
            }
            .map { matchMapper.fromRemoteSingle(it) }
            .toList()

    private suspend fun MultipleRegistrationsJSON.transformRegistrations() =
        registrationSplitter(this)
            .asFlow()
            .map { it to atDS.getMatchByLink(it._links.matchEntity!!.href) }
            .map {
                Triple(
                    it.first,
                    it.second,
                    atDS.getTournamentByLink(it.second._links.tournamentEntity!!.href)
                )
            }
            .map {
                Quadruple(
                    it.first,
                    it.second,
                    it.third,
                    atDS.getGameByLink(it.third._links.gameEntity!!.href)
                )
            }
            .map { registrationMapper.fromRemoteSingle(it) }
            .toList()

}