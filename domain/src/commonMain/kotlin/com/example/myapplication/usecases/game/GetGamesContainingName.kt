package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview

class GetGamesContainingName(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetGamesContainingName.Params, List<GameEntity>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): List<GameEntity> {
        val toReturn = mutableListOf<GameEntity>()
        var pageNumber = 0
        var pageContent = repository.getGamesContainingName(params.gameName, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getGamesContainingName(params.gameName, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(gameName: String, maxPage: Int = 1) =
        buildAction(Params(gameName, maxPage))

    data class Params(val gameName: String, val maxPage: Int = 1)

}