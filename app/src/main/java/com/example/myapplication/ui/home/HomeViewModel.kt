package com.example.myapplication.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.game.CreateGameUseCase
import com.example.myapplication.usecases.game.GetGamesByMode
import com.example.myapplication.usecases.game.GetGamesContainingName
import com.example.myapplication.usecases.match.CreateMatchUseCase
import com.example.myapplication.usecases.match.GetAllAvailableMatchesUseCase
import com.example.myapplication.usecases.match.GetAllMatchesByUserUseCase
import com.example.myapplication.usecases.match.GetMatchesByTournament
import com.example.myapplication.usecases.mode.CreateGameModeUseCase
import com.example.myapplication.usecases.registration.CreateRegistrationUseCase
import com.example.myapplication.usecases.registration.GetAllRegistrationsByMatch
import com.example.myapplication.usecases.registration.GetRegistrationsByTournamentUseCase
import com.example.myapplication.usecases.registration.GetRegistrationsByUser
import com.example.myapplication.usecases.tournament.*
import com.example.myapplication.usecases.user.CreateUserUseCase
import com.example.myapplication.usecases.user.GetAccountVerificationStatusUseCase
import com.example.myapplication.usecases.user.GetSubscribedAccountUseCase
import com.example.myapplication.usecases.user.GetUserInfoUseCase
import com.soywiz.klock.DateTimeTz
import kotlinx.coroutines.launch

class HomeViewModel(
    private val getGamesByMode: GetGamesByMode,
    private val getGamesContainingName: GetGamesContainingName,
    private val getAllAvailableMatches: GetAllAvailableMatchesUseCase,
    private val getAllMatchesByUser: GetAllMatchesByUserUseCase,
    private val getUserInfo: GetUserInfoUseCase,
    private val getCreatedTournamentsByAdmin: GetCreatedTournamentsByAdmin,
    private val getShowcaseTournaments: GetShowCaseTournaments,
    private val getRegistrationsByTournament: GetRegistrationsByTournamentUseCase,
    private val getTournamentsByGame: GetTournamentsByGame,
    private val getTournamentsByMode: GetTournamentsByMode,
    private val getTournamentsContainingTitle: GetTournamentsContainingTitle,
    private val getRegistrationsByMatch: GetAllRegistrationsByMatch,
    private val getRegistrationsByUser: GetRegistrationsByUser,
    private val getMatchesByTournament: GetMatchesByTournament,
    private val isAccountVerified: GetAccountVerificationStatusUseCase,
    private val isSubscribedAccount: GetSubscribedAccountUseCase,
    private val createUser: CreateUserUseCase,
    private val createGameMode: CreateGameModeUseCase,
    private val createGame: CreateGameUseCase,
    private val createTournament: CreateTournamentUseCase,
    private val createMatch: CreateMatchUseCase,
    private val createRegistration: CreateRegistrationUseCase
) : ViewModel() {

    data class MatchWithPlayersCountModel(val matchEntity: MatchEntity, val registeredPlayer: Int)

    private val _matches = MutableLiveData<List<MatchWithPlayersCountModel>>()
    val text: LiveData<List<MatchWithPlayersCountModel>> = _matches

    val dummyUser = UserEntity("User", "user@user.user", "nickname", "image", true, true)

    val dummyGame = GameEntity("COD", listOf("Free4All"), "image", "icon")

    val dummyTournament =
        TournamentEntity(
            42, 42, "42", "42",
            "42", dummyUser, dummyGame
        )

    val dummyMatch =
        MatchEntity(42, DateTimeTz.nowLocal(), 42, true, dummyTournament)

    /*
        fun derp() {
            getAllAvailableMatches.buildActionAsync(GetAllAvailableMatchesUseCase.Params(1)) {
                it.map { MatchWithPlayersCountModel(it.first, it.second) }
                    .let { _matches.value = it }
            }
        }
     */

    fun getGamesByMode() = viewModelScope.launch {
        getGamesByMode.buildAction(dummyGame.availableModes[0])
    }

    fun getGamesContainingName() = viewModelScope.launch {
        getGamesContainingName.buildAction(dummyGame.name)
    }

    fun getAllAvailableMatches() = viewModelScope.launch {
        getAllAvailableMatches.buildAction()
            .map { MatchWithPlayersCountModel(it.first, it.second) }
            .let { _matches.value = it }
    }

    fun getMatchesByUser() = viewModelScope.launch {
        getAllMatchesByUser.buildAction()
    }

    fun getMatchesByTournament() = viewModelScope.launch {
        getMatchesByTournament.buildAction(dummyTournament)
    }

    fun getRegistrationsByMatch() = viewModelScope.launch {
        getRegistrationsByMatch.buildAction(dummyMatch)
    }

    fun getRegistrationByTournament() = viewModelScope.launch {
        getRegistrationsByTournament.buildAction(dummyTournament)
    }

    fun getRegistrationsByUser() = viewModelScope.launch {
        getRegistrationsByUser.buildAction(dummyUser)
    }

    fun getTournamentsByAdmin() = viewModelScope.launch {
        getCreatedTournamentsByAdmin.buildAction()
    }


    fun getShowcaseTournaments() = viewModelScope.launch {
        getShowcaseTournaments.buildAction()
    }

    fun getTournamentsByGame() = viewModelScope.launch {
        getTournamentsByGame.buildAction(dummyGame)
    }

    fun getTournamentsByMode() = viewModelScope.launch {
        getTournamentsByMode.buildAction(dummyGame.availableModes[0])
    }

    fun getTournamentsContainingTitle() = viewModelScope.launch {
        getTournamentsContainingTitle.buildAction(dummyTournament.title)
    }

    fun getUserInformation() = viewModelScope.launch {
        getUserInfo.buildAction()
    }

    fun isAccountVerified() = viewModelScope.launch {
        isAccountVerified.buildAction()
    }

    fun isSubscribedAccount() = viewModelScope.launch {
        isSubscribedAccount.buildAction()
    }

    fun createGameMode() = viewModelScope.launch {
        createGameMode.buildAction("FFA")
    }

    fun createUser() = viewModelScope.launch {
        createUser.buildAction(dummyUser.email, "PWD", dummyUser.nickname, dummyUser.image!!)
    }

    fun createGame() = viewModelScope.launch {
        createGame.buildAction(dummyGame.name, dummyGame.availableModes, "image", "icon")
    }

    fun createTournament() = viewModelScope.launch {
        createTournament.buildAction(
            dummyTournament.playersNumber,
            dummyTournament.title,
            dummyTournament.tournamentDescription,
            dummyTournament.tournamentMode,
            dummyTournament.admin,
            dummyGame
        )
    }

    fun createMatch() = viewModelScope.launch {
        createMatch.buildAction(
            dummyMatch.matchDateTime,
            dummyMatch.playersCount,
            dummyMatch.isRegistrationPossible,
            dummyTournament
        )
    }

    fun createRegistration() = viewModelScope.launch {
        createRegistration.buildAction(dummyUser, dummyMatch)
    }

}