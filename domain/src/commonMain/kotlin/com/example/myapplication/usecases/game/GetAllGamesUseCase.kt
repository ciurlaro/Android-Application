package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class GetAllGamesUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<GetAllGamesUseCase.Params, List<GameEntity>> {

    override suspend fun buildAction(params: Params) =
        repository.getAllGames(params.pages)

    suspend fun buildAction(pages: Int = 1) =
        buildAction(Params(pages))

    data class Params(val pages: Int = 1)
}