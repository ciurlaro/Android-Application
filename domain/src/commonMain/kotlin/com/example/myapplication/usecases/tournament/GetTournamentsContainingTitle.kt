package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetTournamentsContainingTitle(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetTournamentsContainingTitle.Params, Flow<TournamentEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getTournamentsContainingTitle(params.title, it)
            }

    @FlowPreview
    fun buildAction(title: String, maxPage: Int = 1) =
        buildAction(Params(title, maxPage))

    data class Params(val title: String, val maxPage: Int = 1)

}
