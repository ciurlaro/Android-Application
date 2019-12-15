package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class SignInWithGoogleUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<SignInWithGoogleUseCase.Params, Boolean> {
    data class Params(val token: String)

    override suspend fun buildAction(params: Params) =
        repository.loginWithGoogleToken(params.token)

    suspend fun buildAction(token: String) =
        buildAction(Params(token))

}