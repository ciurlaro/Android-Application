package com.example.myapplication.repositories

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.entities.*
import com.example.myapplication.mappers.*
import com.example.myapplication.mappers.entitieslinkmapper.*
import com.example.myapplication.rawresponses.MultipleMatchJSON
import com.example.myapplication.rawresponses.MultipleRegistrationsJSON
import com.example.myapplication.rawresponses.MultipleTournamentsJSON
import com.example.myapplication.rawresponses.createresponses.*
import com.example.myapplication.splitters.MatchSplitter
import com.example.myapplication.splitters.RegistrationSplitter
import com.example.myapplication.splitters.TournamentSplitter
import com.example.myapplication.utils.Quadruple
import com.example.myapplication.utils.Quintuple
import com.soywiz.klock.DateFormat
import com.soywiz.klock.DateTimeTz
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.*

class ArenaTournamentRepositoryImplementation(
    private val atDS: ArenaTournamentDatasource,
    private val gameMapper: GameMapper,
    private val modeMapper: ModeMapper,
    private val matchMapper: MatchMapper,
    private val tournamentMapper: TournamentMapper,
    private val registrationMapper: RegistrationMapper,
    private val userMapper: UserMapper,
    private val accountStatusMapper: AccountStatusMapper,
    private val subscriptionMapper: AccountSubscriptionMapper,
    private val tournamentSplitter: TournamentSplitter,
    private val matchSplitter: MatchSplitter,
    private val registrationSplitter: RegistrationSplitter,
    private val userLinkMapper: UserLinkMapper,
    private val gameLinkMapper: GameLinkMapper,
    private val modeLinkMapper: ModeLinkMapper,
    private val tournamentLinkMapper: TournamentLinkMapper,
    private val matchLinkMapper: MatchLinkMapper
) : ArenaTournamentRepository {

    override suspend fun updateCurrentUserEmail(email: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateCurrentUserPassword(): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateCurrentUserNickname(): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateCurrentUserProfileImage(): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun loginWithEmailAndPassword(email: String, password: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun loginWithFacebookToken(token: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun loginWithGoogleToken(token: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun getCurrentUserAuthMethods(): List<AuthProviders> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun linkGoogleAuthProvider(token: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun linkFacebookAuthProvider(token: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun linkPasswordAuthProvider(password: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun reauthenticateWithPassword(password: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun reauthenticateWithGoogleToken(token: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun reauthenticateWithFacebook(token: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun createGame(
        name: String,
        availableModes: List<String>,
        image: String,
        icon: String
    ) =
        atDS.createGame(
            CreateGameJSON(
                name, availableModes
                    .map { modeLinkMapper.toRemoteSingle(it).toString() }, image, icon
            )
        )
            .let { gameMapper.fromRemoteSingle(it) }

    override suspend fun createGameMode(modeName: String) =
        atDS.createGameMode(CreateGameModeJSON(modeName))
            .let { modeMapper.fromRemoteSingle(it) }

    override suspend fun createTournament(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ) =
        atDS.createTournament(
            CreateTournamentJSON(
                playersNumber,
                title,
                tournamentDescription,
                tournamentMode,
                admin = userLinkMapper.toRemoteSingle(admin.id).toString(),
                game = gameLinkMapper.toRemoteSingle(game.name).toString()
            )
        )
            .let {
                return@let TournamentEntity(
                    it.id,
                    playersNumber,
                    title,
                    tournamentDescription,
                    tournamentMode,
                    admin,
                    game
                )
            }

    override suspend fun createMatch(
        matchDateTime: DateTimeTz,
        playersCount: Int,
        isRegistrationPossible: Boolean,
        tournament: TournamentEntity
    ) =
        atDS.createMatch(
            CreateMatchJSON(
                matchDateTime.format(DateFormat("yyyy-MM-dd'T'HH:mm:ss")),
                playersCount,
                isRegistrationPossible,
                tournament = tournamentLinkMapper.toRemoteSingle(tournament.id).toString()
            )
        )
            .let {
                return@let MatchEntity(
                    it.id,
                    matchDateTime,
                    playersCount,
                    isRegistrationPossible,
                    tournament
                )
            }


    override suspend fun createRegistration(
        user: UserEntity,
        match: MatchEntity,
        outcome: String?
    ) =
        atDS.createRegistration(
            CreateRegistrationJSON(
                user = userLinkMapper.toRemoteSingle(user.id).toString(),
                match = matchLinkMapper.toRemoteSingle(match.id).toString(),
                outcome = outcome
            )
        )
            .let { return@let RegistrationEntity(user, match, outcome) }

    @FlowPreview
    override suspend fun getGameByName(name: String) =
        atDS.getGameByName(name)
            .let { gameMapper.fromRemoteSingle(it) }

    @FlowPreview
    override fun searchGameByName(name: String, page: Int) =
        flow { emit(atDS.searchGamesByName(name, page)) }
            .flatMapIterableConcat {
                gameMapper.fromRemoteMultiple(it)
            }


    @FlowPreview
    override fun getGamesContainingName(name: String, page: Int) =
        flow { emit(atDS.getGamesContainingName(name, page)) }
            .flatMapIterableConcat {
                gameMapper.fromRemoteMultiple(it)
            }


    @FlowPreview
    override fun getGamesByMode(mode: String, page: Int) =
        flow { emit(atDS.getGamesByMode(mode, page)) }
            .flatMapIterableConcat {
                gameMapper.fromRemoteMultiple(it)
            }


    override suspend fun getTournamentById(id: Long) =
        coroutineScope {
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


    @FlowPreview
    override fun getTournamentsByMode(mode: String, page: Int) =
        flow { emit(atDS.getTournamentsByMode(mode, page)) }
            .flatMapConcat {
                it.transformTournaments()
            }

    @FlowPreview
    override fun getTournamentsByGame(gameName: String, page: Int) =
        flow { emit(atDS.getGameByName(gameName)) }
            .flatMapConcat {
                flow { emit(atDS.getTournamentsByGameName(it.gameName, page)) }
                    .flatMapConcat {
                        it.transformTournaments()
                    }
            }

    @FlowPreview
    override fun getTournamentsByUser(userId: String, page: Int) =
        flow { emit(atDS.getTournamentsByUser(userId, page)) }
            .flatMapConcat {
                it.transformTournaments()
            }

    @FlowPreview
    override fun getShowCaseTournaments(page: Int) =
        flow { emit(atDS.getShowCaseTournaments(page)) }
            .flatMapConcat {
                it.transformTournaments()
            }

    @FlowPreview
    override fun getTournamentsContainingTitle(
        title: String,
        page: Int
    ) =
        flow { emit(atDS.getTournamentsContainingTitle(title, page)) }
            .flatMapConcat {
                it.transformTournaments()
            }

    override suspend fun getMatchById(id: Long) =
        coroutineScope {
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

    @FlowPreview
    override fun getMatchesByTournament(
        tournamentId: Long,
        page: Int
    ) =
        flow { emit(atDS.getMatchesByTournamentId(tournamentId, page)) }
            .flatMapConcat {
                it.transformMatches()
            }


    @FlowPreview
    override fun getMatchesByGame(gameName: String, page: Int) =
        flow { emit(atDS.getGameByName(gameName)) }
            .flatMapConcat {
                flow { emit(atDS.getMatchesByGameName(it.gameName, page)) }
                    .flatMapConcat {
                        it.transformMatches()
                    }
            }

    @FlowPreview
    override fun getMatchesAfterDate(
        dateTime: DateTimeTz,
        page: Int
    ) =
        flow { emit(atDS.getMatchesAfterDate(dateTime, page)) }
            .flatMapConcat {
                it.transformMatches()
            }

    @FlowPreview
    override fun getMatchesAvailable(page: Int) =
        flow { emit(atDS.getMatchesAvailable(page)) }
            .flatMapConcat {
                it.transformMatches()
            }


    @FlowPreview
    override fun getMatchesByUser(userId: String, page: Int) =
        flow { emit(atDS.getMatchesByUser(userId, page)) }
            .flatMapConcat {
                it.transformMatches()
            }

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


    @FlowPreview
    override fun getRegistrationsByMatch(
        matchId: Long,
        page: Int
    ) =
        flow { emit(atDS.getMatchById(matchId)) }
            .flatMapConcat {
                flow { emit(atDS.getRegistrationsByMatchId(it.id, page)) }
                    .flatMapConcat {
                        it.transformRegistrations()
                    }
            }

    @FlowPreview
    override fun getRegistrationsByUser(
        userId: String,
        page: Int
    ) =
        flow { emit(atDS.getRegistrationsByUser(userId, page)) }
            .flatMapConcat {
                it.transformRegistrations()
            }

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

    private fun MultipleTournamentsJSON.transformTournaments() =
        tournamentSplitter(this)
            .asFlow()
            .scopedMap {
                Triple(it,
                    async { atDS.getGameByLink(it._links.game!!.href) },
                    async { atDS.getUserByLink(it._links.admin!!.href) })
            }
            .map { Triple(it.first, it.second.await(), it.third.await()) }
            .map { tournamentMapper.fromRemoteSingle(it) }

    private fun MultipleMatchJSON.transformMatches() =
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

    private fun MultipleRegistrationsJSON.transformRegistrations() =
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

@FlowPreview
private fun <T, R> Flow<T>.flatMapIterableConcat(function: (T) -> Iterable<R>) =
    flatMapConcat {
        function(it)
            .asFlow()
    }
