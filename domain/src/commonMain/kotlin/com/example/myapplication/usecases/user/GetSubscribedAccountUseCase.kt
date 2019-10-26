package com.example.myapplication.usecases.user

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseSuspending
import kotlinx.coroutines.FlowPreview

class GetSubscribedAccountUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseSuspending<Boolean> {

    @UseExperimental(FlowPreview::class)
    override suspend fun buildAction(): Boolean = repository.isAccountSubscribed()

}