package com.example.myapplication.ui.game

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.ui.items.GameFlexibleItem
import com.example.myapplication.usecases.game.GetAllGamesUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.launch

class GameViewModel(
    private val getAllGamesUseCase: GetAllGamesUseCase
) : ViewModel() {

    private val gameViewAdapter = FlexibleAdapter<GameFlexibleItem>(emptyList())

    val adapter
        get() = gameViewAdapter as RecyclerView.Adapter<*>

    fun getGames() = viewModelScope.launch {
        getAllGamesUseCase.buildAction()
            .onEach{
                gameViewAdapter.addItem(GameFlexibleItem(it))
            }
    }
}