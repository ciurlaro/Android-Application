package com.example.myapplication.usecases.user

import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import com.example.myapplication.usecases.user.creation.CreateAccountWithEmailAndPasswordUseCase
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.js.Promise

class JsCreateUser(
    override val usecase: CreateAccountWithEmailAndPasswordUseCase
) : JsUseCaseWithParamsPromise<CreateAccountWithEmailAndPasswordUseCase, CreateAccountWithEmailAndPasswordUseCase.Params, Boolean> {

    override fun buildAction(params: CreateAccountWithEmailAndPasswordUseCase.Params): Promise<Boolean> =
        GlobalScope.promise {
        usecase.buildAction(params)
    }
}