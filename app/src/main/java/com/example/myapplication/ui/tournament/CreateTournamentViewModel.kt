package com.example.myapplication.ui.tournament

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.game.GetAllGamesUseCase
import com.example.myapplication.usecases.tournament.CreateTournamentUseCase
import kotlinx.coroutines.FlowPreview

@FlowPreview
class CreateTournamentViewModel(
    private val getAllGamesUseCase: GetAllGamesUseCase,
    private val createTournamentUseCase: CreateTournamentUseCase
) : ViewModel() {

    val selectedGame = MutableLiveData<GameEntity>()
    val playersNumber = MutableLiveData<Int>()


    suspend fun createTournament(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ) {
        createTournamentUseCase.buildAction(playersNumber, title, tournamentDescription, tournamentMode, admin, game)
    }

}