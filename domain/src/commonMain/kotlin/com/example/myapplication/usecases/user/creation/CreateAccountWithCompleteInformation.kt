package com.example.myapplication.usecases.user.creation

import com.example.myapplication.exceptions.AuthException.*
import com.example.myapplication.usecases.UseCaseWithParamSuspending
import com.example.myapplication.usecases.user.update.UpdateUserNicknameUseCase
import com.example.myapplication.usecases.user.update.UpdateUserProfileImageUseCase

class CreateAccountWithCompleteInformation(
    private val createAccountWithEmailAndPasswordUseCase: CreateAccountWithEmailAndPasswordUseCase,
    private val updateUserNicknameUseCase: UpdateUserNicknameUseCase
) : UseCaseWithParamSuspending<CreateAccountWithCompleteInformation.Params, Boolean> {

    /**
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @return true if the operation ends without errors.
     */
    override suspend fun buildAction(params: Params) = with(params) {
        createAccountWithEmailAndPasswordUseCase.buildAction(email, password)
            .and(updateUserNicknameUseCase.buildAction(nickname))
    }

    /**
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @return true if the operation ends without errors.
     */
    suspend fun buildAction(email: String, password: String, nickname: String) =
        buildAction(Params(email, password, nickname))

    data class Params(val email: String, val password: String, val nickname: String)

}