package com.example.myapplication.usecases.user

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCase
import kotlinx.coroutines.FlowPreview

class GetSubscribedAccountUseCase(
    private val repository: ArenaTournamentRepository
) : UseCase<Boolean> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(): Boolean = repository.isAccountSubscribed()

}