package com.example.myapplication.usecases

import kotlin.js.Promise

interface JsUseCaseWithParamsPromise<U : UseCaseWithParamSuspending<P, T>, P, T> {

    val usecase: U

    fun buildAction(params: P): Promise<T>

}