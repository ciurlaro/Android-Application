package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.registration.CreateRegistrationUseCase
import com.example.myapplication.usecases.tournament.GetUsersByTournamentUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
class TournamentDetailViewModel(
    private val repository: ArenaTournamentRepository,
    private val getUsersByTournamentUseCase: GetUsersByTournamentUseCase,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val createRegistrationUseCase: CreateRegistrationUseCase
) : ViewModel() {

    data class Model(
        val tournament: TournamentEntity,
        val users: List<UserEntity>,
        val currentUser: UserEntity,
        val isUserRegistered: Boolean
    )

    val model = MutableLiveData<Model>()

    fun loadTournament(id: Long) = viewModelScope.launch {
        val tournament = repository.getTournamentById(id)
        val users = getUsersByTournamentUseCase.buildAction(tournament.id)
        val currentUser = getCurrentUserInfoUseCase.buildAction()
        val isUserRegistered = users.contains(currentUser)
        model.value = Model(tournament, users, currentUser, isUserRegistered)
    }

    fun TournamentEntity.registrationByUser(user: UserEntity) = viewModelScope.launch {
        createRegistrationUseCase.buildAction(user, this@registrationByUser)
    }

}