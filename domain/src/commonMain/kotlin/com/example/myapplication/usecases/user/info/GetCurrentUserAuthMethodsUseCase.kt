package com.example.myapplication.usecases.user.info

import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseSuspending
import kotlinx.coroutines.FlowPreview

@UseExperimental(FlowPreview::class)
class GetCurrentUserAuthMethodsUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseSuspending<List<AuthProviders>> {

    override suspend fun buildAction() =
        repository.getCurrentUserAuthMethods()

}