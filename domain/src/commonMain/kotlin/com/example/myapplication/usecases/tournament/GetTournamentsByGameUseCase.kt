package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetTournamentsByGameUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetTournamentsByGameUseCase.Params, Flow<TournamentEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getTournamentsByGame(params.game.name, it)
            }

    @FlowPreview
    fun buildAction(game: GameEntity, maxPage: Int = 1) =
        buildAction(Params(game, maxPage))


    data class Params(val game: GameEntity, val maxPage: Int = 1)

}
