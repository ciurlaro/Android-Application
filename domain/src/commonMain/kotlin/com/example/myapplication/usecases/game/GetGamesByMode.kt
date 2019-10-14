package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams
import kotlinx.coroutines.FlowPreview

class GetGamesByMode(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetGamesByMode.Params, List<GameEntity>> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params): List<GameEntity> {
        val toReturn = mutableListOf<GameEntity>()
        var pageNumber = 0
        var pageContent = repository.getGamesByMode(params.mode, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getGamesByMode(params.mode, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(mode: String, maxPage: Int = 1) =
        buildAction(Params(mode, maxPage))

    data class Params(val mode: String, val maxPage: Int = 1)

}