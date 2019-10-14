package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams

class GetTournamentsByMode(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetTournamentsByMode.Params, List<TournamentEntity>> {

    override suspend fun buildAction(params: Params): List<TournamentEntity> {
        val toReturn = mutableListOf<TournamentEntity>()
        var pageNumber = 0
        var pageContent = repository.getTournamentsByMode(params.mode, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getTournamentsByMode(params.mode, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(mode: String, page: Int = 1) =
        buildAction(Params(mode, page))

    data class Params(val mode: String, val maxPage: Int = 1)

}
