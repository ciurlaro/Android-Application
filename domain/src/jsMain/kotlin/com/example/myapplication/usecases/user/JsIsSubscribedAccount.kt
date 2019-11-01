package com.example.myapplication.usecases.user

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.js.Promise


class JsIsSubscribedAccount(
    override val usecase: CreateUserUseCase
) : JsUseCaseWithParamsPromise<CreateUserUseCase, CreateUserUseCase.Params, UserEntity> {

    override fun buildAction(params: CreateUserUseCase.Params): Promise<UserEntity> = GlobalScope.promise {
        usecase.buildAction(params)
    }
}