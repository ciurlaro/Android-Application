package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetMatchesByTournament(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetMatchesByTournament.Params, Flow<MatchEntity>> {

    @FlowPreview
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat {
                repository.getMatchesByTournament(params.tournament.id, it)
            }

    @FlowPreview
    fun buildAction(tournament: TournamentEntity, page: Int = 1) =
        buildAction(Params(tournament, page))

    data class Params(val tournament: TournamentEntity, val maxPage: Int = 1)

}