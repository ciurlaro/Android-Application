package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class SigninUserUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<SigninUserUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.loginWithEmailAndPassword(params.email, params.password)

    suspend fun buildAction(email: String, password: String) =
        buildAction(Params(email, password))

    data class Params(
        val email: String,
        val password: String
    )

}