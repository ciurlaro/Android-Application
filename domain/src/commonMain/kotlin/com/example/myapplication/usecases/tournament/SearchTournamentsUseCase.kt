package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class SearchTournamentsUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<SearchTournamentsUseCase.Params, List<TournamentEntity>> {

    data class Params(val title: String, val gameIds: List<String>, val maxPage: Int = 1)

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0..params.maxPage)
            .asFlow()
            .flatMapConcatIterable { repository.searchTournaments(params.title, params.gameIds, it) }
            .toList()


    @FlowPreview
    suspend fun buildAction(title: String, gameIds: List<String> = emptyList(), maxPage: Int = 1) =
        buildAction(Params(title, gameIds, maxPage))


}

