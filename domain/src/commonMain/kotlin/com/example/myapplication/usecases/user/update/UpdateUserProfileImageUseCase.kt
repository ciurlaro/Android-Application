package com.example.myapplication.usecases.user.update

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending

class UpdateUserProfileImageUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<UpdateUserProfileImageUseCase.Params, Boolean> {

    override suspend fun buildAction(params: Params) =
        repository.updateCurrentUserProfileImage(params.profileImage)

    suspend fun buildAction(profileImage: ByteArray) =
        buildAction(Params(profileImage))

    data class Params(val profileImage: ByteArray) {
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other == null || this::class != other::class) return false

            other as Params

            if (!profileImage.contentEquals(other.profileImage)) return false

            return true
        }

        override fun hashCode() =
            profileImage.contentHashCode()
    }

}

