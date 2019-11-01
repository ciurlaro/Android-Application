package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.flow.Flow

class GetTournamentsByModePerPageUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetTournamentsByModePerPageUseCase.Params, Flow<TournamentEntity>> {

    override fun buildAction(params: Params) =
        repository.getTournamentsByMode(params.mode, params.page)

    fun buildAction(mode: String, page: Int) =
        buildAction(Params(mode, page))

    data class Params(val mode: String, val page: Int)

}