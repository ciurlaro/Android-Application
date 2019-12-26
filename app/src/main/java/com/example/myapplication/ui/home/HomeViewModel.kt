package com.example.myapplication.ui.home

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.tournament.GetShowCaseTournamentsUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
class HomeViewModel(
    private val showCaseTournamentsUseCase: GetShowCaseTournamentsUseCase
) : ViewModel() {

    val tournaments = MutableLiveData<List<TournamentEntity>>()

    fun getShowcaseTournaments() = viewModelScope.launch {
        tournaments.value = showCaseTournamentsUseCase.buildAction()
    }

}