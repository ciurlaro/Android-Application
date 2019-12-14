package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class SignInwithFacebookUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<SignInwithFacebookUseCase.Params, Boolean> {
    data class Params(val fbToken: String)

    override suspend fun buildAction(params: Params) =
        repository.loginWithFacebookToken(params.fbToken)

}