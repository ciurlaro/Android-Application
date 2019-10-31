package com.example.myapplication.usecases

import kotlin.js.Promise

interface JsUseCasePromise<U : UseCaseSuspending<T>, T> {

    val useCase: U

    fun buildAction(): Promise<T>

}