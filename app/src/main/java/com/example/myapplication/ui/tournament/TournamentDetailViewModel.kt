package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.tournament.GetUsersByTournamentUseCase
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.launch

class TournamentDetailViewModel(
    private val repository: ArenaTournamentRepository,
    private val getUsersByTournamentUseCase: GetUsersByTournamentUseCase
) : ViewModel() {

    data class Model(val tournament: TournamentEntity, val users: List<UserEntity>)

    val model = MutableLiveData<Model>()

    @FlowPreview
    fun loadTournament(id: Long) = viewModelScope.launch {
        val t = repository.getTournamentById(id)
        val u = getUsersByTournamentUseCase.buildAction(t.id)
        model.value = Model(t, u)
    }

}