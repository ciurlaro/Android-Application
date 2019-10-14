package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview

class GetShowCaseTournaments(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetShowCaseTournaments.Params, List<TournamentEntity>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): List<TournamentEntity> {
        val toReturn = mutableListOf<TournamentEntity>()
        var pageNumber = 0
        var pageContent = repository.getShowCaseTournaments(pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getShowCaseTournaments(pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }


    suspend fun buildAction(maxPage: Int = 1) =
        buildAction(Params(maxPage))

    data class Params(val maxPage: Int = 1)

}