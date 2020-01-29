package com.example.myapplication.usecases.user.creation

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class CreateAccountWithFacebookToken(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateAccountWithFacebookToken.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.loginWithFacebookToken(params.token)


    suspend fun buildAction(token: String) =
        buildAction(Params(token))

    data class Params(val token: String)

}

