package com.example.myapplication.ui.home

import android.view.View
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.ui.search.SearchViewModel
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
import com.example.myapplication.utils.DummyClasses
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.InternalCoroutinesApi
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onEach
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

    private val homeViewAdapter = FlexibleAdapter<Model>(emptyList())

    val adapter
        get() = homeViewAdapter as RecyclerView.Adapter<*>

    @InternalCoroutinesApi
    fun getGamesByMode() = viewModelScope.launch {
        getGamesByMode.buildAction(DummyClasses.game.availableModes[0])
    }

    fun getGamesContainingName() = viewModelScope.launch {
        getGamesContainingName.buildAction(DummyClasses.game.name)
    }

    @ExperimentalCoroutinesApi
    fun getAllAvailableMatches() =
        getAllAvailableMatches.buildAction()
            .map { Model(it.first, it.second) }
            .onEach {
                homeViewAdapter.addItem(it)
            }
            .launchIn(viewModelScope)


    @FlowPreview
    fun getMatchesByUser() = viewModelScope.launch {
        getAllMatchesByUser.buildAction()
    }


    data class Model(val matchEntity: MatchEntity, val registeredPlayer: Int) :
        AbstractFlexibleItem<SearchViewModel.Model.ViewHolder>() {
        override fun bindViewHolder(
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>?,
            holder: SearchViewModel.Model.ViewHolder?,
            position: Int,
            payloads: MutableList<Any>?
        ) {
            TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        }

        override fun createViewHolder(
            view: View?,
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>?
        ): SearchViewModel.Model.ViewHolder {
            TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        }

        override fun getLayoutRes(): Int {
            TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        }
    }

    @FlowPreview
    fun getMatchesByTournament() = viewModelScope.launch {
        getMatchesByTournament.buildAction(DummyClasses.tournament)
    }

    @FlowPreview
    fun getRegistrationsByMatch() = viewModelScope.launch {
        getRegistrationsByMatch.buildAction(DummyClasses.match)
    }

    fun getRegistrationByTournament() = viewModelScope.launch {
        getRegistrationsByTournament.buildAction(DummyClasses.tournament)
    }

    @FlowPreview
    fun getRegistrationsByUser() = viewModelScope.launch {
        getRegistrationsByUser.buildAction(DummyClasses.user)
    }

    @FlowPreview
    fun getTournamentsByAdmin() = viewModelScope.launch {
        getCreatedTournamentsByAdmin.buildAction()
    }

    fun getShowcaseTournaments() = viewModelScope.launch {
        getShowcaseTournaments.buildAction()
    }

    @FlowPreview
    fun getTournamentsByGame() = viewModelScope.launch {
        getTournamentsByGame.buildAction(DummyClasses.game)
    }

    fun getTournamentsByMode() = viewModelScope.launch {
        getTournamentsByMode.buildAction(DummyClasses.game.availableModes[0])
    }

    @FlowPreview
    fun getTournamentsContainingTitle() = viewModelScope.launch {
        getTournamentsContainingTitle.buildAction(DummyClasses.tournament.title)
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
        createGameMode.buildAction("S&D")
    }

    fun createGame() = viewModelScope.launch {
        createGame.buildAction(DummyClasses.game.name, DummyClasses.game.availableModes, "image", "icon")
    }

    fun createUser() = viewModelScope.launch {
        createUser.buildAction(DummyClasses.user.email, "PWD", DummyClasses.user.nickname, DummyClasses.user.image)
    }

    fun createTournament() = viewModelScope.launch {
        createTournament.buildAction(
            DummyClasses.tournament.playersNumber,
            DummyClasses.tournament.title,
            DummyClasses.tournament.tournamentDescription,
            DummyClasses.tournament.tournamentMode,
            DummyClasses.tournament.admin,
            DummyClasses.game
        )
    }

    fun createMatch() = viewModelScope.launch {
        createMatch.buildAction(
            DummyClasses.match.matchDateTime,
            DummyClasses.match.playersCount,
            DummyClasses.match.isRegistrationPossible,
            DummyClasses.tournament
        )
    }

    fun createRegistration() = viewModelScope.launch {
        createRegistration.buildAction(DummyClasses.user, DummyClasses.match)
    }

}