package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetTournamentsByGameUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<GetTournamentsByGameUseCase.Params, List<TournamentEntity>> {

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getTournamentsByGame(params.game.name, it)
            }.toList()

    @FlowPreview
    suspend fun buildAction(game: GameEntity, maxPage: Int = 1) =
        buildAction(Params(game, maxPage))


    data class Params(val game: GameEntity, val maxPage: Int = 1)

}
