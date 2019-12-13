package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class GetTournamentsByModePerPageUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<GetTournamentsByModePerPageUseCase.Params, List<TournamentEntity>> {

    override suspend fun buildAction(params: Params) =
        repository.getTournamentsByMode(params.mode, params.page)

    suspend fun buildAction(mode: String, page: Int = 1) =
        buildAction(Params(mode, page))

    data class Params(val mode: String, val page: Int)

}