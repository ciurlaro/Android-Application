package com.example.myapplication.usecases.user.creation

import com.example.myapplication.exceptions.AuthException.*
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.FlowPreview

class CreateAccountWithEmailAndPasswordUseCase(
    private val repository: ArenaTournamentRepository
) : UseCaseWithParamsSuspending<CreateAccountWithEmailAndPasswordUseCase.Params, Boolean> {

    /**
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @return true if the operation ends without errors.
     */
    override suspend fun buildAction(params: Params) =
        repository.createAccountWithEmailAndPassword(params.email, params.password)

    /**
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @return true if the operation ends without errors.
     */
    suspend fun buildAction(email: String, password: String) =
        buildAction(Params(email, password))

    data class Params(val email: String, val password: String)

}

