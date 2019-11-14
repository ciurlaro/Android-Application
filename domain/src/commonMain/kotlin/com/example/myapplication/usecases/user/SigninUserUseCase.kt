package com.example.myapplication.usecases.user

import com.example.myapplication.auth.AuthenticationManager
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class SigninUserUseCase(
    private val authenticationManager: AuthenticationManager
) : UseCaseWithParamSuspending<SigninUserUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        authenticationManager.loginWithEmailAndPassword(params.email, params.password)

    suspend fun buildAction(email: String, password: String) =
        buildAction(Params(email, password))

    data class Params(
        val email: String,
        val password: String
    )

}