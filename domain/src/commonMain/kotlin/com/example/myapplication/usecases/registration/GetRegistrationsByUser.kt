package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParams

class GetRegistrationsByUser(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParams<GetRegistrationsByUser.Params, List<RegistrationEntity>> {

    override suspend fun buildAction(params: Params): List<RegistrationEntity> {
        val toReturn = mutableListOf<RegistrationEntity>()
        var pageNumber = 0
        var pageContent = repository.getRegistrationsByUser(params.user.id, pageNumber)
        toReturn.addAll(pageContent)
        pageNumber++
        while (pageContent.isNotEmpty() && pageNumber <= params.maxPage) {
            pageContent = repository.getRegistrationsByUser(params.user.id, pageNumber)
            toReturn.addAll(pageContent)
            pageNumber++
        }
        return toReturn
    }

    suspend fun buildAction(user: UserEntity, maxPage: Int = 1) =
        buildAction(Params(user, maxPage))

    data class Params(val user: UserEntity, val maxPage: Int = 1)

}