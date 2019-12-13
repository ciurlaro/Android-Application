package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class GetAllGamesUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<GetAllGamesUseCase.Params, List<GameEntity>> {

    override suspend fun buildAction(params: Params) =
        repository.getAllGames(params.page)

    suspend fun buildAction(page: Int = 1) =
        buildAction(Params(page))

    data class Params(val page: Int = 1)
}