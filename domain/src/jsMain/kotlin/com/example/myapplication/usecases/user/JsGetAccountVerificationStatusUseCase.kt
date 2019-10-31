package com.example.myapplication.usecases.user

import com.example.myapplication.usecases.JsUseCasePromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsGetAccountVerificationStatusUseCase(
    override val useCase: GetAccountVerificationStatusUseCase
) : JsUseCasePromise<GetAccountVerificationStatusUseCase, Boolean> {
    override fun buildAction() = GlobalScope.promise {
        useCase.buildAction()
    }
}