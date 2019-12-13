package com.example.myapplication.usecases.user.update

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class UpdateUserEmailUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<UpdateUserEmailUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.updateCurrentUserEmail(params.email)

    suspend fun buildAction(email: String) =
        buildAction(Params(email))

    data class Params(val email: String)

}

