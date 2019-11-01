package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetGamesContainingNameUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetGamesContainingNameUseCase.Params, Flow<GameEntity>> {

    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getGamesContainingName(params.gameName, it)
            }

    fun buildAction(gameName: String, maxPage: Int = 1) =
        buildAction(Params(gameName, maxPage))

    data class Params(val gameName: String, val maxPage: Int = 1)

}