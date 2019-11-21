package com.example.myapplication.usecases.user.creation

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

class CreateAccountWithGoogleToken(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateAccountWithGoogleToken.Params, Boolean> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) =
        repository.loginWithGoogleToken(params.token)


    suspend fun buildAction(token: String) =
        buildAction(Params(token))

    data class Params(val token: String)

}

