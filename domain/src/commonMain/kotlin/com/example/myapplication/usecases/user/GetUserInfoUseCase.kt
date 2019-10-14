package com.example.myapplication.usecases.user

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCase
import kotlinx.coroutines.FlowPreview

class GetUserInfoUseCase(
    private val repository: ArenaTournamentRepository
) : UseCase<UserEntity> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(): UserEntity = repository.getCurrentUser()

}