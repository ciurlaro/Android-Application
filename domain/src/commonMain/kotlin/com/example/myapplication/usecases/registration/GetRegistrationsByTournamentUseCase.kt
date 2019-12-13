package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.toList

class GetRegistrationsByTournamentUseCase(
    private val getMatchesByTournamentUseCase: GetMatchesByTournamentUseCase,
    private val getAllRegistrationsByMatchUseCase: GetAllRegistrationsByMatchUseCase
) : UseCaseWithParamsSuspending<GetRegistrationsByTournamentUseCase.Params, List<RegistrationEntity>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) =
        (0 until params.pages)
            .asFlow()
            .flatMapConcat {
                getMatchesByTournamentUseCase.buildAction(params.tournament)
                    .asFlow()
                    .flatMapConcatIterable { match ->
                        getAllRegistrationsByMatchUseCase.buildAction(match, it)
                    }
            }.toList()

    suspend fun buildAction(tournament: TournamentEntity, pages: Int = 1) =
        buildAction(Params(tournament, pages))

    data class Params(val tournament: TournamentEntity, val pages: Int = 1)

}