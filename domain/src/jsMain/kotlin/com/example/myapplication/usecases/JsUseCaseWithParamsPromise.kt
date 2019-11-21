package com.example.myapplication.usecases

import kotlin.js.Promise

interface JsUseCaseWithParamsPromise<P,T> {


    fun buildAction(params: P): Promise<T>

}
