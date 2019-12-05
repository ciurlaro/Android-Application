package com.example.myapplication.usecases.user

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class IsUserRegisteredUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<IsUserRegisteredUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.getRegistrationByUserAndMatch(params.userId, params.matchId, params.pages).let { true }

    suspend fun buildAction(userId: String, matchId: Long, pages: Int = 1) =
        buildAction(Params(userId, matchId, pages))

    data class Params(val userId: String, val matchId: Long, val pages: Int = 1)
}