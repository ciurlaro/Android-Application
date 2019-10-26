package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetShowCaseTournaments(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetShowCaseTournaments.Params, Flow<TournamentEntity>> {

    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getShowCaseTournaments(it)
            }


    fun buildAction(maxPage: Int = 1) =
        buildAction(Params(maxPage))

    data class Params(val maxPage: Int = 1)

}