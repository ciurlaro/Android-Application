package com.example.myapplication.usecases.user.info

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending


class GetUserInfoByUidUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<GetUserInfoByUidUseCase.Params, UserEntity> {

    override suspend fun buildAction(params: Params) =
        repository.getUserById(params.uid)

    suspend fun buildAction(uid: String, page: Int = 1) =
        buildAction(Params(uid, page))

    data class Params(val uid: String, val page: Int = 1)
}

