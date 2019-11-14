package com.example.myapplication.usecases.user

import com.example.myapplication.auth.AuthenticationManager
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending
import kotlinx.coroutines.FlowPreview

class CreateUserUseCase(
    private val repository: ArenaTournamentRepository,
    private val authenticationManager: AuthenticationManager
) : UseCaseWithParamSuspending<CreateUserUseCase.Params, Unit> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(params: Params) {
        authenticationManager.createAccountWithEmailAndPassword(params.email, params.password)
        repository.createUser(
            params.email,
            params.password,
            params.nickname,
            params.image
        )
    }


    suspend fun buildAction(
        email: String,
        password: String,
        nickname: String,
        image: String
    ) =
        buildAction(Params(email, password, nickname, image))

    data class Params(
        val email: String,
        val password: String,
        val nickname: String,
        val image: String
    )

}

