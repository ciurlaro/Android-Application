package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import com.example.myapplication.utils.flatMapConcatIterable
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList

@FlowPreview
class GetUsersByTournamentUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetUsersByTournamentUseCase.Params, List<UserEntity>> {

    data class Params(val tournamentId: Long, val page: Int)

    override suspend fun buildAction(params: Params) =
        (0 until params.page)
            .asFlow()
            .flatMapConcatIterable { repository.getRegistrationsByTournament(params.tournamentId, it) }
            .map { it.user }
            .toList()

    suspend fun buildAction(tournamentId: Long, maxPage: Int = 1) =
        buildAction(Params(tournamentId, maxPage))
}