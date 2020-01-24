package com.example.myapplication.usecases

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

fun <T> UseCaseSuspending<T>.asPromiseUseCase() = object : JsUseCasePromise<T> {
    override fun buildAction() = GlobalScope.promise {
        this@asPromiseUseCase.buildAction()
    }
}

fun <P, T> UseCaseWithParamsSuspending<P, T>.asPromiseUseCase() = object : JsUseCaseWithParamsPromise<P, T> {
    override fun buildAction(params: P) = GlobalScope.promise {
        this@asPromiseUseCase.buildAction(params)
    }
}