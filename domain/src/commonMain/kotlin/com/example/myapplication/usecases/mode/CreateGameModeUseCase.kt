package com.example.myapplication.usecases.mode

import com.example.myapplication.entities.ModeEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

class CreateGameModeUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateGameModeUseCase.Params, ModeEntity> {

    override suspend fun buildAction(params: Params): ModeEntity =
        repository.createGameMode(params.modeName)

    suspend fun buildAction(modeName: String) =
        buildAction(Params(modeName))

    data class Params(val modeName: String)

}