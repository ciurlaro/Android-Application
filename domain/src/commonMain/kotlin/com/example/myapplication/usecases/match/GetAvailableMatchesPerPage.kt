package com.example.myapplication.usecases

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.repositories.ArenaTournamentRepository

class GetAvailableMatchesPerPage(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetAvailableMatchesPerPage.Params, List<MatchEntity>> {

    override suspend fun buildAction(params: Params) =
        repository.getMatchesAvailable(params.page)

    suspend fun buildAction(page: Int) =
        buildAction(Params(page))

    data class Params(val page: Int)

}