package com.example.myapplication.usecases

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.repositories.ArenaTournamentRepository

class GetAllRegistrationsByMatch(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetAllRegistrationsByMatch.Params, List<RegistrationEntity>> {

    override suspend fun buildAction(params: Params): List<RegistrationEntity> {
        val toReturn = mutableListOf<RegistrationEntity>()
        var pageNumber = 0
        var pageContent = repository.getRegistrationsByMatch(params.match.id, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getRegistrationsByMatch(params.match.id, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(match: MatchEntity, maxPage: Int = 10) =
        buildAction(Params(match, maxPage))

    data class Params(val match: MatchEntity, val maxPage: Int = 10)

}