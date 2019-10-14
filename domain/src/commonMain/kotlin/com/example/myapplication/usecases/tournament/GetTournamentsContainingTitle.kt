package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams

class GetTournamentsContainingTitle(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetTournamentsContainingTitle.Params, List<TournamentEntity>> {

    override suspend fun buildAction(params: Params): List<TournamentEntity> {
        val toReturn = mutableListOf<TournamentEntity>()
        var pageNumber = 0
        var pageContent = repository.getTournamentsContainingTitle(params.title , pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getTournamentsContainingTitle(params.title , pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(title: String, maxPage: Int = 1) =
        buildAction(Params(title, maxPage))

    data class Params(val title: String, val maxPage: Int = 1)

}
