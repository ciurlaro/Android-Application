package com.example.myapplication.ui.registration

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.ui.items.MatchFlexibleItem
import com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase
import com.example.myapplication.usecases.user.IsUserRegisteredUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

class RegistrationViewModel(
    private val getMatchesByTournamentUseCase: GetMatchesByTournamentUseCase,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val isUserRegisteredUseCase: IsUserRegisteredUseCase
) : ViewModel() {

    private val searchViewAdapter = FlexibleAdapter<MatchFlexibleItem>(emptyList())

    val adapter
        get() = searchViewAdapter as RecyclerView.Adapter<*>

    @FlowPreview
    fun getMatchesByTournament(tournament: TournamentEntity) = viewModelScope.launch {
        getMatchesByTournamentUseCase.buildAction(tournament)
            .onEach {
                val alreadyRegistered =
                    isUserRegisteredUseCase.buildAction(getCurrentUserInfoUseCase.buildAction()!!.id, it.id)
                searchViewAdapter.addItem(MatchFlexibleItem(it, tournament.playersNumber, alreadyRegistered))
            }
    }
}
