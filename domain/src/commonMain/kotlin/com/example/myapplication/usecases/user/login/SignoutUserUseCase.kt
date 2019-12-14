package com.example.myapplication.usecases.user.login

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseSuspending

class SignoutUserUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseSuspending<Unit> {

    override suspend fun buildAction() = repository.logout()

}