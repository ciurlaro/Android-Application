package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetTournamentsContainingTitleUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetTournamentsContainingTitleUseCase.Params, List<TournamentEntity>> {

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getTournamentsContainingTitle(params.title, it)
            }.toList()

    @FlowPreview
    suspend fun buildAction(title: String, maxPage: Int = 1) =
        buildAction(Params(title, maxPage))

    data class Params(val title: String, val maxPage: Int = 1)

}
