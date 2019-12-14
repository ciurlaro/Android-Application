package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class LinkEmailPasswordUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<LinkEmailPasswordUseCase.Params, Boolean> {
    data class Params(val password: String)

    override suspend fun buildAction(params: Params) = repository
        .linkPasswordAuthProvider(params.password)
}