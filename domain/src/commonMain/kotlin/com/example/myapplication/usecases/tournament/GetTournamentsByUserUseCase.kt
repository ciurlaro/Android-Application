package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class GetTournamentsByUserUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetTournamentsByUserUseCase.Params, List<TournamentEntity>> {
    data class Params(val userId: String)

    override suspend fun buildAction(params: Params) =
        repository.getTournamentsByUser(params.userId, 0)

    suspend fun buildAction(userId: String) =
        buildAction(Params(userId))

}