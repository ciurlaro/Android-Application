package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

class GetUsersByTournamentUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetUsersByTournamentUseCase.Params, List<UserEntity>> {

    data class Params(val tournamentId: Long)

    @FlowPreview
    override suspend fun buildAction(params: Params) =
        repository.getMatchesByTournament(params.tournamentId, 1)
            .asFlow()
            .flatMapConcatIterable { repository.getRegistrationsByMatch(it.id, 0) }
            .map { it.user }
            .toList()

    @FlowPreview
    suspend fun buildAction(tournamentId: Long) =
        buildAction(Params(tournamentId))
}