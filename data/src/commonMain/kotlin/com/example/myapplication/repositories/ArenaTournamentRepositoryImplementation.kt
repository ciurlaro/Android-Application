package com.example.myapplication.repositories

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.datasource.FirebaseAuthDatasource
import com.example.myapplication.datasource.FirebaseStorageDatasource
import com.example.myapplication.entities.*
import com.example.myapplication.exceptions.AuthException
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
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class ArenaTournamentRepositoryImplementation(
    private val arenaTournamentDS: ArenaTournamentDatasource,
    private val firebaseAuthDS: FirebaseAuthDatasource,
    private val firebaseStorageDS: FirebaseStorageDatasource,
    private val gameMapper: GameMapper,
    private val modeMapper: ModeMapper,
    private val matchMapper: MatchMapper,
    private val tournamentMapper: TournamentMapper,
    private val registrationMapper: RegistrationMapper,
    private val userMapper: UserMapper,
    private val currentUserMapper: CurrentUserMapper,
    private val tournamentSplitter: TournamentSplitter,
    private val matchSplitter: MatchSplitter,
    private val registrationSplitter: RegistrationSplitter,
    private val userLinkMapper: UserLinkMapper,
    private val gameLinkMapper: GameLinkMapper,
    private val modeLinkMapper: ModeLinkMapper,
    private val tournamentLinkMapper: TournamentLinkMapper,
    private val matchLinkMapper: MatchLinkMapper
) : ArenaTournamentRepository {

    private suspend fun currentUserOrError() =
        getCurrentUser() ?: throw AuthException.AuthNotAuthenticatedException()

    override suspend fun updateCurrentUserEmail(email: String) =
        firebaseAuthDS.updateUserEmail(email)

    override suspend fun updateCurrentUserPassword(password: String) =
        firebaseAuthDS.updateUserPassword(password)

    override suspend fun updateCurrentUserNickname(nickname: String) =
        firebaseAuthDS.updateUserNickname(nickname)

    override suspend fun updateCurrentUserProfileImage(image: ByteArray) =
        firebaseStorageDS.uploadFile(image, "users/${currentUserOrError().id}/profile")

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        firebaseAuthDS.loginWithEmailAndPassword(email, password)

    override suspend fun loginWithFacebookToken(token: String) =
        firebaseAuthDS.loginWithFacebookToken(token)

    override suspend fun loginWithGoogleToken(token: String) =
        firebaseAuthDS.loginWithGoogleToken(token)

    override suspend fun logout() =
        firebaseAuthDS.logout()

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        firebaseAuthDS.createAccountWithEmailAndPassword(email, password)

    override suspend fun getCurrentUserAuthMethods() =
        firebaseAuthDS.getCurrentUserAuthMethods()

    override suspend fun linkGoogleAuthProvider(token: String) =
        firebaseAuthDS.linkGoogleAuthProvider(token)

    override suspend fun linkFacebookAuthProvider(token: String) =
        firebaseAuthDS.linkFacebookAuthProvider(token)

    override suspend fun linkPasswordAuthProvider(password: String) =
        firebaseAuthDS.linkPasswordAuthProvider(password)

    override suspend fun reauthenticateWithPassword(password: String) =
        firebaseAuthDS.reauthenticateWithPassword(password)

    override suspend fun reauthenticateWithGoogleToken(token: String) =
        firebaseAuthDS.reauthenticateWithGoogleToken(token)

    override suspend fun reauthenticateWithFacebook(token: String) =
        firebaseAuthDS.reauthenticateWithFacebook(token)

    override suspend fun isCurrentUserEmailVerified() =
        firebaseAuthDS.isCurrentUserEmailVerified()

    override suspend fun isCurrentUserSubscriber() =
        firebaseAuthDS.getCurrentUserClaims().getValue("isSubscriber")

    override suspend fun createGame(
        name: String,
        availableModes: List<String>,
        image: String,
        icon: String
    ) =
        arenaTournamentDS.createGame(
            CreateGameJSON(
                name, availableModes
                    .map { modeLinkMapper.toRemoteSingle(it).toString() }, image, icon
            )
        )
            .let { gameMapper.fromRemoteSingle(it) }

    override suspend fun createGameMode(modeName: String) =
        arenaTournamentDS.createGameMode(CreateGameModeJSON(modeName))
            .let { modeMapper.fromRemoteSingle(it) }

    override suspend fun createTournament(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ) =
        arenaTournamentDS.createTournament(
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
        arenaTournamentDS.createMatch(
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
        tournament: TournamentEntity,
        outcome: String?
    ) =
        arenaTournamentDS.createRegistration(
            CreateRegistrationJSON(
                user = userLinkMapper.toRemoteSingle(user.id).toString(),
                tournament = tournamentLinkMapper.toRemoteSingle(tournament.id).toString(),
                outcome = outcome
            )
        )
            .let { return@let RegistrationEntity(user, tournament, outcome) }

    override suspend fun getGameByName(name: String) =
        arenaTournamentDS.getGameByName(name)
            .let { gameMapper.fromRemoteSingle(it) }

    override suspend fun searchGamesByName(name: String, page: Int) =
        arenaTournamentDS.searchGamesByName(name, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getAllGames(page: Int): List<GameEntity> =
        arenaTournamentDS.getAllGames(page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getGamesContainingName(name: String, page: Int) =
        arenaTournamentDS.getGamesContainingName(name, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getGamesByMode(mode: String, page: Int) =
        arenaTournamentDS.getGamesByMode(mode, page)
            .let { gameMapper.fromRemoteMultiple(it) }

    override suspend fun getTournamentById(id: Long) = coroutineScope {
        arenaTournamentDS.getTournamentById(id)
            .let {
                Triple(
                    it,
                    async { arenaTournamentDS.getGameByLink(it._links.game!!.href) },
                    async { arenaTournamentDS.getUserByLink(it._links.admin!!.href) }
                )
            }
            .let { Triple(it.first, it.second.await(), it.third.await()) }
            .let { tournamentMapper.fromRemoteSingle(it) }
    }

    override suspend fun getTournamentsByMode(mode: String, page: Int) =
        arenaTournamentDS.getTournamentsByMode(mode, page).transformTournaments()

    override suspend fun getTournamentsByGame(gameName: String, page: Int) =
        arenaTournamentDS.getTournamentsByGameName(gameName, page).transformTournaments()

    override suspend fun getTournamentsByUser(userId: String, page: Int) =
        arenaTournamentDS.getTournamentsByUser(userId, page).transformTournaments()

    //
    override suspend fun getShowCaseTournaments(page: Int) =
        arenaTournamentDS.getShowCaseTournaments(page).transformTournaments()

    override suspend fun getTournamentsContainingTitle(title: String, page: Int) =
        arenaTournamentDS.getTournamentsContainingTitle(title, page).transformTournaments()

    override suspend fun searchTournaments(title: String, gameId: String?, page: Int) =
        arenaTournamentDS.searchTournaments(title, gameId, page).transformTournaments()

    override suspend fun getMatchById(id: Long) =
        coroutineScope {
            arenaTournamentDS.getMatchById(id)
                .let { it to arenaTournamentDS.getTournamentByLink(it._links.tournamentEntity!!.href) }
                .let {
                    Quadruple(
                        it.first,
                        it.second,
                        async { arenaTournamentDS.getGameByLink(it.second._links.gameEntity!!.href) },
                        async { arenaTournamentDS.getUserByLink(it.second._links.userEntity!!.href) }
                    )
                }
                .let { Quadruple(it.first, it.second, it.third.await(), it.fourth.await()) }
                .let { matchMapper.fromRemoteSingle(it) }
        }

    override suspend fun getMatchesByTournament(tournamentId: Long, page: Int) =
        arenaTournamentDS.getMatchesByTournamentId(tournamentId, page).transformMatches()


    override suspend fun getMatchesByGame(gameName: String, page: Int) =
        arenaTournamentDS.getGameByName(gameName)
            .let { arenaTournamentDS.getMatchesByGameName(it.gameName, page).transformMatches() }

    override suspend fun getMatchesAfterDate(dateTime: DateTimeTz, page: Int) =
        arenaTournamentDS.getMatchesAfterDate(dateTime, page).transformMatches()

    override suspend fun getMatchesAvailable(page: Int) =
        arenaTournamentDS.getMatchesAvailable(page).transformMatches()


    override suspend fun getMatchesByUser(userId: String, page: Int) =
        arenaTournamentDS.getMatchesByUser(userId, page).transformMatches()

    override suspend fun getRegistrationById(id: Long) = coroutineScope {
        arenaTournamentDS.getRegistrationById(id)
            .let { it to arenaTournamentDS.getMatchByLink(it._links.matchEntity!!.href) }
            .let {
                Triple(
                    it.first,
                    it.second,
                    arenaTournamentDS.getTournamentByLink(it.second._links.tournamentEntity!!.href)
                )
            }
            .let {
                Quintuple(
                    it.first,
                    it.second,
                    it.third,
                    async { arenaTournamentDS.getGameByLink(it.third._links.gameEntity!!.href) },
                    async { arenaTournamentDS.getUserById(it.first._links.userEntity!!.href) }
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

    override suspend fun getRegistrationsByMatch(matchId: Long, page: Int) =
        arenaTournamentDS.getRegistrationsByMatchId(matchId, page).transformRegistrations()


    override suspend fun getRegistrationsByUser(userId: String, page: Int) =
        arenaTournamentDS.getRegistrationsByUser(userId, page).transformRegistrations()

    override suspend fun getRegistrationByUserAndMatch(userId: String, matchId: Long, page: Int) =
        arenaTournamentDS.getRegistrationByUserIdAndMatchId(userId, matchId, page)
            .transformRegistrations()
            .firstOrNull()

    override suspend fun getUserById(id: String) =
        arenaTournamentDS.getUserById(id)
            .let { userMapper.fromRemoteSingle(it) }

    override suspend fun getCurrentUser() = firebaseAuthDS.getCurrentAuthUser()?.let {
        coroutineScope {
            val claims = async { firebaseAuthDS.getCurrentUserClaims() }
            val imageUrl = it.storageImagePath.let {
                async { if (it.startsWith("http")) it else firebaseStorageDS.getFileUrl(it) }
            }

            currentUserMapper.fromRemoteSingle(
                it,
                claims.await(),
                imageUrl.await()
            )
        }
    }

    private suspend fun MultipleTournamentsJSON.transformTournaments() =
        tournamentSplitter(this)
            .asFlow()
            .scopedMap {
                Triple(it,
                    async { arenaTournamentDS.getGameByLink(it._links.game!!.href) },
                    async { arenaTournamentDS.getUserByLink(it._links.admin!!.href) })
            }
            .map { Triple(it.first, it.second.await(), it.third.await()) }
            .map { tournamentMapper.fromRemoteSingle(it) }
            .toList()

    private suspend fun MultipleMatchJSON.transformMatches() =
        matchSplitter(this)
            .asFlow()
            .map {
                it to arenaTournamentDS.getTournamentByLink(it._links.tournament!!.href)
            }
            .scopedMap {
                Quadruple(
                    it.first,
                    it.second,
                    async { arenaTournamentDS.getGameByLink(it.second._links.game!!.href) },
                    async { arenaTournamentDS.getUserByLink(it.second._links.admin!!.href) }
                )
            }
            .map {
                Quadruple(it.first, it.second, it.third.await(), it.fourth.await())
            }
            .map {
                matchMapper.fromRemoteSingle(it)
            }.toList()

    private suspend fun MultipleRegistrationsJSON.transformRegistrations() =
        registrationSplitter(this)
            .asFlow()
            .map { it to arenaTournamentDS.getMatchByLink(it._links.match!!.href) }
            .map {
                Triple(
                    it.first,
                    it.second,
                    arenaTournamentDS.getTournamentByLink(it.second._links.tournament!!.href)
                )
            }
            .scopedMap {
                Quintuple(
                    it.first,
                    it.second,
                    it.third,
                    async { arenaTournamentDS.getGameByLink(it.third._links.game!!.href) },
                    async { arenaTournamentDS.getUserByLink(it.first._links.user!!.href) }
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
