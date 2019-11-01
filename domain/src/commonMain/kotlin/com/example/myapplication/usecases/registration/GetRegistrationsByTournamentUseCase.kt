package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.match.GetMatchesByTournamentUseCase
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

class GetRegistrationsByTournamentUseCase(
    private val getMatchesByTournamentUseCase: GetMatchesByTournamentUseCase,
    private val getAllRegistrationsByMatchUseCase: GetAllRegistrationsByMatchUseCase
) : UseCaseWithParams<GetRegistrationsByTournamentUseCase.Params, Flow<RegistrationEntity>> {

    @UseExperimental(FlowPreview::class)
    override fun buildAction(params: Params) =
        (0 until params.pages)
            .asFlow()
            .flatMapConcat {
                getMatchesByTournamentUseCase.buildAction(params.tournament)
                    .flatMapConcat { match ->
                        getAllRegistrationsByMatchUseCase.buildAction(match, it)
                    }
            }

    fun buildAction(tournament: TournamentEntity, pages: Int = 1) =
        buildAction(Params(tournament, pages))

    data class Params(val tournament: TournamentEntity, val pages: Int = 1)

}