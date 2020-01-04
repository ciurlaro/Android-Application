package com.example.myapplication.usecases.user.login

import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class SignInWithGoogleUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<SignInWithGoogleUseCase.Params, Boolean> {

    data class Params(val token: String, val email: String)

    override suspend fun buildAction(params: Params) = with(params) {
        val loginMethods = repository.getAuthMethodsForEmail(email)
        if (loginMethods.isNotEmpty() && AuthProviders.GOOGLE !in loginMethods)
            throw AuthException.AuthUserCollisionException(
                "User $email already " +
                        "have an account that is not linked with Google, but is trying " +
                        "to login with Google"
            )
        repository.loginWithGoogleToken(token)
    }

    suspend fun buildAction(token: String, email: String) =
        buildAction(Params(token, email))

}