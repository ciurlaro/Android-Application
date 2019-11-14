package com.example.myapplication.usecases.user

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import com.example.myapplication.usecases.user.creation.CreateAccountWithEmailAndPasswordUseCase
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.js.Promise


class JsIsSubscribedAccount(
    override val usecase: CreateAccountWithEmailAndPasswordUseCase
) : JsUseCaseWithParamsPromise<CreateAccountWithEmailAndPasswordUseCase, CreateAccountWithEmailAndPasswordUseCase.Params, UserEntity> {

    override fun buildAction(params: CreateAccountWithEmailAndPasswordUseCase.Params): Promise<UserEntity> = GlobalScope.promise {
        usecase.buildAction(params)
    }
}