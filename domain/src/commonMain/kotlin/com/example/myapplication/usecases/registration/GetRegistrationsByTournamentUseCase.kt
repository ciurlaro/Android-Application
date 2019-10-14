package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.UseCaseWithParams
import com.example.myapplication.usecases.match.GetMatchesByTournament
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class GetRegistrationsByTournamentUseCase(
    private val getMatchesByTournament: GetMatchesByTournament,
    private val getAllRegistrationsByMatch: GetAllRegistrationsByMatch
) : UseCaseWithParams<GetRegistrationsByTournamentUseCase.Params, List<RegistrationEntity>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): List<RegistrationEntity> =
        (0 until params.pages)
            .asFlow()
            .map { getMatchesByTournament.buildAction(params.tournament) }
            .flatMapConcat {
                it.asFlow()
                    .map { getAllRegistrationsByMatch.buildAction(it) }
            }
            .toList()
            .flatten()

    suspend fun buildAction(tournament: TournamentEntity, pages: Int = 1) =
        buildAction(Params(tournament, pages))

    data class Params(val tournament: TournamentEntity, val pages: Int = 1)

}