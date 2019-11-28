package com.example.myapplication.ui.home

import android.view.View
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.tournament.GetShowCaseTournamentsUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach

class HomeViewModel(
    private val showCaseTournamentsUseCase: GetShowCaseTournamentsUseCase
) : ViewModel() {

    private val homeViewAdapter = FlexibleAdapter<Model>(emptyList())

    val adapter
        get() = homeViewAdapter as RecyclerView.Adapter<*>

    data class Model(val tournamentEntity: TournamentEntity) :
        AbstractFlexibleItem<Model.ViewHolder>() {
        override fun bindViewHolder(
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
            holder: ViewHolder,
            position: Int,
            payloads: MutableList<Any>
        ) {
            holder.render(tournamentEntity)
        }

        override fun createViewHolder(
            view: View,
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
        ) = ViewHolder(view, adapter)

        override fun getLayoutRes() = R.layout.item_tournament

        class ViewHolder(view: View, adapter: FlexibleAdapter<*>) : FlexibleViewHolder(view, adapter) {

            fun render(data: TournamentEntity, registeredPlayer: Int) = with(itemView) {
                /*game_image.setImageResource(R.drawable.doggo)
                game_icon.setImageResource(R.drawable.wow)
                tournament_name.text = data.tournament.title

                val matchInfo = "${data.matchDateTime}".split("T")
                match_date.text = matchInfo[0]
                match_time.text = matchInfo[1]

                match_players.text = "$registeredPlayer|2"
                //match_players.text = Resources.getSystem().getString(R.string.players_number_text, registeredPlayer, 2)
                game_name.text = data.tournament.game.name*/
            }

        }
    }

    @ExperimentalCoroutinesApi
    fun getShowcaseTournaments() =
        showCaseTournamentsUseCase.buildAction()
            .onEach { homeViewAdapter.addItem(Model(it)) }
            .launchIn(viewModelScope)

    /** @ExperimentalCoroutinesApi
    fun getAllAvailableMatches() =
    getAllAvailableMatches.buildAction()
    .map {
    Model(it.first, it.second) }
    .onEach {
    homeViewAdapter.addItem(it)
    }
    .launchIn(viewModelScope)*/

    /**@InternalCoroutinesApi
    fun getGamesByMode() = viewModelScope.launch {
    getGamesByMode.buildAction(DummyClasses.game.availableModes[0])
    }

    fun getGamesContainingName() = viewModelScope.launch {
    getGamesContainingName.buildAction(DummyClasses.game.name)
    }


    @FlowPreview
    fun getMatchesByUser() = viewModelScope.launch {
    getAllMatchesByUser.buildAction()
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
    createGame.buildAction(
    DummyClasses.game.name,
    DummyClasses.game.availableModes,
    "image",
    "icon"
    )
    }

    fun createUser() = viewModelScope.launch {
    createUser.buildAction(
    DummyClasses.user.email,
    "PWD",
    DummyClasses.user.nickname,
    DummyClasses.user.image
    )
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
    }*/

}