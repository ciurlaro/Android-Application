package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

class GetTournamentsByModeUseCase(
    private val getTournamentsByModePerPageUseCase: GetTournamentsByModePerPageUseCase,
    private val getMatchesByTournamentUseCase: GetMatchesByTournamentUseCase

) : UseCaseWithParamsSuspending<GetTournamentsByModeUseCase.Params, List<Pair<TournamentEntity, Int>>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable { page ->
                getTournamentsByModePerPageUseCase.buildAction(
                    GetTournamentsByModePerPageUseCase.Params(params.mode, page)
                ).map { tournament ->
                    tournament to getMatchesByTournamentUseCase.buildAction(tournament).toList()
                        .sumBy { it.playersCount }
                }
            }.toList()


    suspend fun buildAction(mode: String, page: Int = 1) =
        buildAction(Params(mode, page))

    data class Params(val mode: String, val maxPage: Int = 1)

}