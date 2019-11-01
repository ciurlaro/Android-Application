package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*

class GetTournamentsByModeUseCase(
    private val getTournamentsByModePerPageUseCase: GetTournamentsByModePerPageUseCase,
    private val getMatchesByTournamentUseCase: GetMatchesByTournamentUseCase

) : UseCaseWithParams<GetTournamentsByModeUseCase.Params, Flow<Pair<TournamentEntity, Int>>> {

    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcat { page ->
                getTournamentsByModePerPageUseCase.buildAction(
                    GetTournamentsByModePerPageUseCase.Params(params.mode, page)
                ).map { tournament ->
                    tournament to getMatchesByTournamentUseCase.buildAction(tournament).toList()
                        .sumBy { it.playersCount }
                }
            }


    fun buildAction(mode: String, page: Int = 1) =
        buildAction(Params(mode, page))

    data class Params(val mode: String, val maxPage: Int = 1)

}