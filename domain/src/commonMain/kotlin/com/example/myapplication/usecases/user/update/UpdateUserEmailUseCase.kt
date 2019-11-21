package com.example.myapplication.usecases.user.update

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class UpdateUserEmailUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<UpdateUserEmailUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.updateCurrentUserEmail(params.email)

    suspend fun buildAction(email: String) =
        buildAction(Params(email))

    data class Params(val email: String)

}

