package com.example.myapplication.ui.tournament

import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.tournament.CreateTournamentUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
class CreateTournamentViewModel(
    private val createTournamentUseCase: CreateTournamentUseCase
) : ViewModel() {

    val selectedGame = MutableLiveData<GameEntity>()
    val selectedPlayersNumber = MutableLiveData<Int>()
    val description = MutableLiveData<String>()
    val title = MutableLiveData<String>()


    fun createTournament(
        lifecycleScope: LifecycleCoroutineScope,
        function: (TournamentEntity) -> Unit
    ) = viewModelScope.launch {
        val t = createTournamentUseCase.buildAction(
            selectedPlayersNumber.value!!,
            title.value!!,
            description.value!!,
            selectedGame.value!!
        )
        lifecycleScope.launch { function(t) }
    }

}
