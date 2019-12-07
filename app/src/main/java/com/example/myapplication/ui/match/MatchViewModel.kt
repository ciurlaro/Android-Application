package com.example.myapplication.ui.match

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.ui.items.MatchFlexibleItem
import com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase
import com.example.myapplication.usecases.user.IsUserRegisteredUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

class MatchViewModel(
    private val getMatchesByTournamentUseCase: GetMatchesByTournamentUseCase,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val isUserRegisteredUseCase: IsUserRegisteredUseCase,
    private val repository: ArenaTournamentRepository
) : ViewModel() {

    val tournament = MutableLiveData<TournamentEntity>()
    private val matchViewAdapter = FlexibleAdapter<MatchFlexibleItem>(emptyList())

    val adapter
        get() = matchViewAdapter as RecyclerView.Adapter<*>

    @FlowPreview
    fun getMatchesByTournament(tournament: TournamentEntity) = viewModelScope.launch {
        getMatchesByTournamentUseCase.buildAction(tournament)
            .onEach {
                val alreadyRegistered =
                    isUserRegisteredUseCase.buildAction(getCurrentUserInfoUseCase.buildAction()!!.id, it.id)
                matchViewAdapter.addItem(MatchFlexibleItem(it, tournament.playersNumber, alreadyRegistered))
            }
    }

    fun loadTournament(tournamentId: Long) = viewModelScope.launch {
        tournament.value = repository.getTournamentById(tournamentId)
    }
}
