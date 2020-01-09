package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.usecases.game.GetAllGamesUseCase
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class SelectGameDialogViewModel(
    private val getAllGamesUseCase: GetAllGamesUseCase
) : ViewModel() {

    val allGames = MutableLiveData<List<GameEntity>>()

    fun loadGames() = viewModelScope.launch(Dispatchers.Main) {
        allGames.value = getAllGamesUseCase.buildAction()
    }

}