package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.registration.CreateRegistrationUseCase
import com.example.myapplication.usecases.tournament.GetTournamentByIdUseCase
import com.example.myapplication.usecases.tournament.GetUsersByTournamentUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
class TournamentDetailViewModel(
    private val getTournamentByIdUseCase: GetTournamentByIdUseCase,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase
) : ViewModel() {

    data class Model(
        val tournament: TournamentEntity,
        val currentUser: UserEntity
    )

    val model = MutableLiveData<Model>()

    fun loadTournament(id: Long) = viewModelScope.launch {
        val tournament = getTournamentByIdUseCase.buildAction(id)
        val currentUser = getCurrentUserInfoUseCase.buildAction()!!
        model.value = Model(tournament, currentUser)
    }

}
