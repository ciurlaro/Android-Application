package com.example.myapplication.usecases.user.info

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseSuspending

class GetCurrentUserInfoUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseSuspending<UserEntity?> {

    override suspend fun buildAction() =
        repository.getCurrentUser()

}
