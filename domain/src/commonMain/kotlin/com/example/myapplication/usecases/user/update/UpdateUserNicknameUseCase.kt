package com.example.myapplication.usecases.user.update

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class UpdateUserNicknameUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<UpdateUserNicknameUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.updateCurrentUserNickname(params.nickname)

    suspend fun buildAction(nickname: String) =
        buildAction(Params(nickname))

    data class Params(val nickname: String)

}

