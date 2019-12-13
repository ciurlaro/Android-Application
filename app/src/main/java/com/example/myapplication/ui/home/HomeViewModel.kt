package com.example.myapplication.ui.home

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.usecases.tournament.GetShowCaseTournamentsUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

class HomeViewModel(
    private val showCaseTournamentsUseCase: GetShowCaseTournamentsUseCase
) : ViewModel() {

    val tournaments = MutableLiveData<List<TournamentEntity>>()

    @FlowPreview
    fun getShowcaseTournaments() = viewModelScope.launch {
        tournaments.value = showCaseTournamentsUseCase.buildAction()
    }

}