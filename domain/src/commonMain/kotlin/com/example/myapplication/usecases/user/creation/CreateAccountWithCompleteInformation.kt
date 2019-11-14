package com.example.myapplication.usecases.user.creation

import com.example.myapplication.usecases.UseCaseWithParamSuspending
import com.example.myapplication.usecases.user.update.UpdateUserNicknameUseCase
import com.example.myapplication.usecases.user.update.UpdateUserProfileImageUseCase

class CreateAccountWithCompleteInformation(
    private val createAccountWithEmailAndPasswordUseCase: CreateAccountWithEmailAndPasswordUseCase,
    private val updateUserNicknameUseCase: UpdateUserNicknameUseCase,
    private val updateUserProfileImageUseCase: UpdateUserProfileImageUseCase
) : UseCaseWithParamSuspending<CreateAccountWithCompleteInformation.Params, Boolean> {

    override suspend fun buildAction(params: Params) = with(params) {
        createAccountWithEmailAndPasswordUseCase.buildAction(email, password)
            .and(updateUserNicknameUseCase.buildAction(nickname))
            .and(updateUserProfileImageUseCase.buildAction(image))
    }

    suspend fun buildAction(email: String, password: String, nickname: String, image: String) =
        buildAction(Params(email, password, nickname, image))

    data class Params(val email: String, val password: String, val nickname: String, val image: String)

}