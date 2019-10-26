package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.flow.Flow

class GetAvailableMatchesPerPage(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetAvailableMatchesPerPage.Params, Flow<MatchEntity>> {

    override fun buildAction(params: Params) =
        repository.getMatchesAvailable(params.page)

    fun buildAction(page: Int) =
        buildAction(Params(page))

    data class Params(val page: Int)

}