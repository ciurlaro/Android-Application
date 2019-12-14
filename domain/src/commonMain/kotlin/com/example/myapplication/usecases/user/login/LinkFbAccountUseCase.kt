package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class LinkFbAccountUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<SignInwithFacebookUseCase.Params, Boolean> {

    override suspend fun buildAction(params: SignInwithFacebookUseCase.Params) =
        repository.linkFacebookAuthProvider(params.fbToken)

}