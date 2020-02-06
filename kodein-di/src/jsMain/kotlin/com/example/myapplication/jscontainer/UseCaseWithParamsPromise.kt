package com.example.myapplication.jscontainer

import kotlin.js.Promise

interface UseCaseWithParamsPromise<P, O> {
    fun buildAction(params: P): Promise<O>
}