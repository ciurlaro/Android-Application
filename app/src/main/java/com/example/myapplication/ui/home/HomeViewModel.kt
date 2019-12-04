package com.example.myapplication.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.usecases.tournament.GetShowCaseTournamentsUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

class HomeViewModel(
    private val showCaseTournamentsUseCase: GetShowCaseTournamentsUseCase
) : ViewModel() {

    private val homeViewAdapter = FlexibleAdapter<TournamentFlexibleItem>(emptyList())

    val adapter
        get() = homeViewAdapter as RecyclerView.Adapter<*>

    @FlowPreview
    fun getShowcaseTournaments() = viewModelScope.launch {
        showCaseTournamentsUseCase.buildAction()
            .onEach {
                homeViewAdapter.addItem(TournamentFlexibleItem(it))
            }

    }
}