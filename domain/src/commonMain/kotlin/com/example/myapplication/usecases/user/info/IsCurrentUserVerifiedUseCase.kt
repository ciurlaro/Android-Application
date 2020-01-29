package com.example.myapplication.usecases.user.info

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseSuspending
import kotlinx.coroutines.FlowPreview

class IsCurrentUserVerifiedUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseSuspending<Boolean> {

    override suspend fun buildAction() =
        repository.isCurrentUserEmailVerified()

}