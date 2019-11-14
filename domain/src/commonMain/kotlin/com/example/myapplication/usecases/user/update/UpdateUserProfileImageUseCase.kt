package com.example.myapplication.usecases.user.update

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamSuspending

class UpdateUserProfileImageUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamSuspending<UpdateUserProfileImageUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.updateCurrentUserProfileImage(params.profileImage)

    suspend fun buildAction(profileImage: String) =
        buildAction(Params(profileImage))

    data class Params(val profileImage: String)

}

