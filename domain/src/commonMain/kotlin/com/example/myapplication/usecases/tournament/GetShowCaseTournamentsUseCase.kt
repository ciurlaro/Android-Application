package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetShowCaseTournamentsUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetShowCaseTournamentsUseCase.Params, List<TournamentEntity>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getShowCaseTournaments(it)
            }
            .toList()


    suspend fun buildAction(maxPage: Int = 1) =
        buildAction(Params(maxPage))

    data class Params(val maxPage: Int = 1)

}