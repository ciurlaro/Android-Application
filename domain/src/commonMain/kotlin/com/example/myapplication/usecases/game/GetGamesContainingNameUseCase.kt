package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

@FlowPreview
class GetGamesContainingNameUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetGamesContainingNameUseCase.Params, List<GameEntity>> {

    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getGamesContainingName(params.gameName, it)
            }.toList()

    suspend fun buildAction(gameName: String, maxPage: Int = 1) =
        buildAction(Params(gameName, maxPage))

    data class Params(val gameName: String, val maxPage: Int = 1)

}