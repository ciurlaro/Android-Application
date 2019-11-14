package com.example.myapplication.usecases.user

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending
import kotlinx.coroutines.FlowPreview

class CreateAccountWithEmailAndPasswordUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<CreateAccountWithEmailAndPasswordUseCase.Params, Boolean> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) =
        repository.createAccountWithEmailAndPassword(params.email, params.password)

    suspend fun buildAction(email: String, password: String) =
        buildAction(Params(email, password))

    data class Params(val email: String, val password: String)

}

