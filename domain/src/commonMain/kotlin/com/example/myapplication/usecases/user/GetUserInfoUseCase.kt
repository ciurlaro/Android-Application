package com.example.myapplication.usecases

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import kotlinx.coroutines.FlowPreview

class GetUserInfoUseCase(
    private val repository: ArenaTournamentRepository
) : UseCase<UserEntity> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(): UserEntity = repository.getCurrentUser()

}