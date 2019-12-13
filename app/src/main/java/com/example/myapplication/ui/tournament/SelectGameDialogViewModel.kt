package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class SelectGameDialogViewModel(
    private val repository: ArenaTournamentRepository
) : ViewModel() {

    val allGames = MutableLiveData<List<GameEntity>>()

    fun loadGames() = viewModelScope.launch(Dispatchers.Main) {
        allGames.value = repository.getAllGames(1)
    }

}