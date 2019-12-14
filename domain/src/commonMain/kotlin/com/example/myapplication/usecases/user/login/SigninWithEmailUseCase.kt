package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class SigninWithEmailUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<SigninWithEmailUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.loginWithEmailAndPassword(params.email, params.password)

    suspend fun buildAction(email: String, password: String) =
        buildAction(Params(email, password))

    data class Params(
        val email: String,
        val password: String
    )

}