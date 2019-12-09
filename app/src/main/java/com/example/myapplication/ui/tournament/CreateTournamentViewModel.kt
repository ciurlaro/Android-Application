package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.ui.items.CreateTournamentFlexibleItem
import com.example.myapplication.usecases.game.GetAllGamesUseCase
import com.example.myapplication.usecases.tournament.CreateTournamentUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
class CreateTournamentViewModel(
    private val getAllGamesUseCase: GetAllGamesUseCase,
    private val createTournamentUseCase: CreateTournamentUseCase
) : ViewModel() {

    val selectedGame = MutableLiveData<GameEntity>()
    val adapter = FlexibleAdapter<CreateTournamentFlexibleItem>(emptyList()).apply {
        mItemClickListener = FlexibleAdapter.OnItemClickListener { _, position ->
            selectedGame.value = getItem(position)!!.gameEntity
            true
        }
    }


    private fun getAllGames() = viewModelScope.launch(Dispatchers.Default) {
        getAllGamesUseCase.buildAction()
            .map { CreateTournamentFlexibleItem(it) }
            .let { adapter.addItems(0, it) }
    }


    suspend fun createTournament(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ) {
        createTournamentUseCase.buildAction(playersNumber, title, tournamentDescription, tournamentMode, admin, game)
    }

}