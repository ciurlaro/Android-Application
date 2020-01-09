package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

@FlowPreview
class GetTournamentByIdUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetTournamentByIdUseCase.Params, TournamentEntity> {

    override suspend fun buildAction(params: Params) =
        repository.getTournamentById(params.id)

    suspend fun buildAction(id: Long) =
        buildAction(Params(id))

    data class Params(val id: Long)

}
