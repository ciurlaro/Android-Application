package com.example.myapplication.ui.search

import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.game.GetAllGamesUseCase
import com.example.myapplication.usecases.tournament.SearchTournamentsUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
class SearchViewModel(
    private val searchTournamentsUseCase: SearchTournamentsUseCase,
    private val getAllGamesUseCase: GetAllGamesUseCase
) : ViewModel() {

    init {
        Log.d(this::class.simpleName!!, "I am being created")
    }

    val availableGames = MutableLiveData<List<GameEntity>>()
    val selectedGame = MutableLiveData<GameEntity>()
    val tournaments = MutableLiveData<List<TournamentEntity>>()

    fun loadGames() = viewModelScope.launch {
        availableGames.value = getAllGamesUseCase.buildAction(0)
    }

    fun loadTournaments(title: String) = viewModelScope.launch {
        tournaments.value = searchTournamentsUseCase.buildAction(
            title,
            selectedGame.value?.name
        )
    }
}