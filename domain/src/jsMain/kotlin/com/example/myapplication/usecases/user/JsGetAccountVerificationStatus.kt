package com.example.myapplication.usecases.user

import com.example.myapplication.usecases.JsUseCasePromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsGetAccountVerificationStatus(
    override val usecase: GetAccountVerificationStatusUseCase
) : JsUseCasePromise<GetAccountVerificationStatusUseCase, Boolean> {

    override fun buildAction() = GlobalScope.promise {
        usecase.buildAction()
    }
}