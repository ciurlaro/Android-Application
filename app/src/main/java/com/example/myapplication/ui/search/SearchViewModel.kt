package com.example.myapplication.ui.search

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.usecases.tournament.SearchTournamentsUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

class SearchViewModel(
    private val searchTournaments: SearchTournamentsUseCase
) : ViewModel() {

    private val searchViewAdapter = FlexibleAdapter<TournamentFlexibleItem>(emptyList())

    val adapter
        get() = searchViewAdapter as RecyclerView.Adapter<*>


    @FlowPreview
    fun getTournamentsByMode(gameName: String) = viewModelScope.launch {
        searchTournaments.buildAction(gameName)
            .onEach {
                searchViewAdapter.addItem(TournamentFlexibleItem(it))
            }
    }
}