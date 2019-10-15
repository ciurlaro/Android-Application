package com.example.myapplication.repositories

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.mappers.*
import com.example.myapplication.rawresponses.MultipleMatchJSON
import com.example.myapplication.rawresponses.MultipleRegistrationsJSON
import com.example.myapplication.rawresponses.MultipleTournamentsJSON
import com.example.myapplication.splitters.MatchSplitter
import com.example.myapplication.splitters.RegistrationSplitter
import com.example.myapplication.splitters.TournamentSplitter
import com.example.myapplication.utils.Quadruple
import com.example.myapplication.utils.Quintuple
import com.soywiz.klock.DateTimeTz
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class ArenaTournamentRepositoryImplementation(
    private val atDS: ArenaTournamentDatasource,
    private val gameMapper: GameMapper,
    private val matchMapper: MatchMapper,
    private val tournamentMapper: TournamentMapper,
    private val registrationMapper: RegistrationMapper,
    private val userMapper: UserMapper,
    private val accountStatusMapper: AccountStatusMapper,
    private val subscriptionMapper: AccountSubscriptionMapper,
    private val tournamentSplitter: TournamentSplitter,
    private val matchSplitter: MatchSplitter,
    private val registrationSplitter: RegistrationSplitter
) : ArenaTournamentRepository {

    override suspend fun getGameByName(name: String) =
        atDS.getGameByName(name)
            .let { gameMapper.fromRemoteSingle(it) }

    override suspend fun searchGameByName(name: String, page: Int) =
        atDS.searchGamesByName(name, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getGamesContainingName(name: String, page: Int) =
        atDS.getGamesContinaingName(name, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getGamesByMode(mode: String, page: Int) =
        atDS.getGamesByMode(mode, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getTournamentById(id: Long) = coroutineScope {
        atDS.getTournamentById(id)
            .let {
                Triple(
                    it,
                    async { atDS.getGameByLink(it._links.game!!.href) },
                    async { atDS.getUserByLink(it._links.userEntity!!.href) }
                )
            }
            .let { Triple(it.first, it.second.await(), it.third.await()) }
            .let { tournamentMapper.fromRemoteSingle(it) }
    }

    override suspend fun getTournamentsByMode(mode: String, page: Int) =
        atDS.getTournamentsByMode(mode, page)
            .transformTournaments()

    override suspend fun getTournamentsByGame(gameName: String, page: Int) =
        atDS.getGameByName(gameName)
            .let {
                atDS.getTournamentsByGameName(it.gameName, page)
            }
            .transformTournaments()

    override suspend fun getTournamentsByUser(userId: String, page: Int): List<TournamentEntity> =
        atDS.getTournamentsByUser(userId, page)
            .transformTournaments()

    override suspend fun getShowCaseTournaments(page: Int): List<TournamentEntity> =
        atDS.getShowCaseTournaments(page)
            .transformTournaments()

    override suspend fun getTournamentsContainingTitle(
        title: String,
        page: Int
    ) = atDS.getTournamentsContainingTitle(title, page).transformTournaments()


    override suspend fun getMatchById(id: Long) = coroutineScope {
        atDS.getMatchById(id)
            .let { it to atDS.getTournamentByLink(it._links.tournamentEntity!!.href) }
            .let {
                Quadruple(
                    it.first,
                    it.second,
                    async { atDS.getGameByLink(it.second._links.gameEntity!!.href) },
                    async { atDS.getUserByLink(it.second._links.userEntity!!.href) }
                )
            }
            .let { Quadruple(it.first, it.second, it.third.await(), it.fourth.await()) }
            .let { matchMapper.fromRemoteSingle(it) }
    }

    override suspend fun getMatchesByTournament(
        tournamentId: Long,
        page: Int
    ) = atDS.getMatchesByTournamentId(tournamentId, page)
        .transformMatches()

    override suspend fun getMatchesByGame(gameName: String, page: Int) =
        atDS.getGameByName(gameName)
            .let { atDS.getMatchesByGameName(it.gameName, page) }
            .transformMatches()

    override suspend fun getMatchesAfterDate(
        dateTime: DateTimeTz,
        page: Int
    ) = atDS.getMatchesAfterDate(dateTime, page)
        .transformMatches()

    override suspend fun getMatchesAvailable(page: Int) =
        atDS.getMatchesAvailable(page)
            .transformMatches()

    override suspend fun getMatchesByUser(userId: String, page: Int): List<MatchEntity> =
        atDS.getMatchesByUser(userId, page)
            .transformMatches()

    override suspend fun getRegistrationById(id: Long) = coroutineScope {
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
                Quintuple(
                    it.first,
                    it.second,
                    it.third,
                    async { atDS.getGameByLink(it.third._links.gameEntity!!.href) },
                    async { atDS.getUserById(it.first._links.userEntity!!.href) }
                )
            }
            .let {
                Quintuple(
                    it.first,
                    it.second,
                    it.third,
                    it.fourth.await(),
                    it.fifth.await()
                )
            }
            .let { registrationMapper.fromRemoteSingle(it) }
    }

    override suspend fun getRegistrationsByMatch(
        matchId: Long,
        page: Int
    ) = atDS.getMatchById(matchId)
        .let { atDS.getRegistrationsByMatchId(it.id, page) }
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

    override suspend fun isAccountVerified() =
        atDS.getAccountVerificationStatus()
            .let { accountStatusMapper.fromRemoteSingle(it) }

    override suspend fun isAccountSubscribed() =
        atDS.getAccountSubscription()
            .let { subscriptionMapper.fromRemoteSingle(it) }

    private suspend fun MultipleTournamentsJSON.transformTournaments() =
        tournamentSplitter(this)
            .asFlow()
            .scopedMap {
                Triple(it,
                    async { atDS.getGameByLink(it._links.game!!.href) },
                    async { atDS.getUserByLink(it._links.admin!!.href) })
            }
            .map { Triple(it.first, it.second.await(), it.third.await()) }
            .map { tournamentMapper.fromRemoteSingle(it) }
            .toList()

    private suspend fun MultipleMatchJSON.transformMatches() =
        matchSplitter(this)
            .asFlow()
            .map {
                it to atDS.getTournamentByLink(it._links.tournament!!.href)
            }
            .scopedMap {
                Quadruple(
                    it.first,
                    it.second,
                    async { atDS.getGameByLink(it.second._links.game!!.href) },
                    async { atDS.getUserByLink(it.second._links.admin!!.href) }
                )
            }
            .map {
                Quadruple(it.first, it.second, it.third.await(), it.fourth.await())
            }
            .map {
                matchMapper.fromRemoteSingle(it)
            }
            .toList()

    private suspend fun MultipleRegistrationsJSON.transformRegistrations() =
        registrationSplitter(this)
            .asFlow()
            .map { it to atDS.getMatchByLink(it._links.match!!.href) }
            .map {
                Triple(
                    it.first,
                    it.second,
                    atDS.getTournamentByLink(it.second._links.tournament!!.href)
                )
            }
            .scopedMap {
                Quintuple(
                    it.first,
                    it.second,
                    it.third,
                    async { atDS.getGameByLink(it.third._links.game!!.href) },
                    async { atDS.getUserByLink(it.first._links.user!!.href) }
                )
            }
            .map {
                Quintuple(
                    it.first,
                    it.second,
                    it.third,
                    it.fourth.await(),
                    it.fifth.await()
                )
            }
            .map { registrationMapper.fromRemoteSingle(it) }
            .toList()

    /**
     * Returns a flow containing the results of applying the given [transform] function to each value of the original flow and exposes
     * the current [CoroutineScope].
     */
    private inline fun <T, R> Flow<T>.scopedMap(crossinline transform: suspend CoroutineScope.(value: T) -> R): Flow<R> =
        map {
            coroutineScope {
                transform(it)
            }
        }

}