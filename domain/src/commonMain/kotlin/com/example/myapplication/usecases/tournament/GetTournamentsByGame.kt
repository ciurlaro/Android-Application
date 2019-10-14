package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams

class GetTournamentsByGame(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetTournamentsByGame.Params, List<TournamentEntity>> {

    override suspend fun buildAction(params: Params): List<TournamentEntity> {
        val toReturn = mutableListOf<TournamentEntity>()
        var pageNumber = 0
        var pageContent = repository.getTournamentsByGame(params.game.name, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getTournamentsByGame(params.game.name, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(game: GameEntity, maxPage: Int = 1) =
        buildAction(Params(game, maxPage))


    data class Params(val game: GameEntity, val maxPage: Int = 1)

}
