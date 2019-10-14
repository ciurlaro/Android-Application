package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams

class GetMatchesByTournament(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetMatchesByTournament.Params, List<MatchEntity>> {

    override suspend fun buildAction(params: Params): List<MatchEntity> {
        val toReturn = mutableListOf<MatchEntity>()
        var pageNumber = 0
        var pageContent = repository.getMatchesByTournament(params.tournament.id, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getMatchesByTournament(params.tournament.id, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(tournament: TournamentEntity, page: Int = 1) =
        buildAction(Params(tournament, page))

    data class Params(val tournament: TournamentEntity, val maxPage: Int = 1)

}