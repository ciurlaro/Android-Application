package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetMatchesByTournamentUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetMatchesByTournamentUseCase.Params, List<MatchEntity>> {

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getMatchesByTournament(params.tournament.id, it)
            }.toList()

    @FlowPreview
    suspend fun buildAction(tournament: TournamentEntity, page: Int = 1) =
        buildAction(Params(tournament, page))

    data class Params(val tournament: TournamentEntity, val maxPage: Int = 1)

}