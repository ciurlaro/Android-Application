package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList

@FlowPreview
class GetRegistrationsByTournamentUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetRegistrationsByTournamentUseCase.Params, List<RegistrationEntity>> {

    override suspend fun buildAction(params: Params) =
        (0 until params.maxPage)
            .asFlow()
            .flatMapConcatIterable {
                repository.getRegistrationsByTournament(params.tournament.id, it)
            }.toList()

    suspend fun buildAction(tournament: TournamentEntity, maxPage: Int = 1) =
        buildAction(Params(tournament, maxPage))

    data class Params(val tournament: TournamentEntity, val maxPage: Int = 1)

}