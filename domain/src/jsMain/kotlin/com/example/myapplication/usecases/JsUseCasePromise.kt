package com.example.myapplication.usecases

import kotlin.js.Promise

interface JsUseCasePromise<T> {

    fun buildAction(): Promise<T>

}
