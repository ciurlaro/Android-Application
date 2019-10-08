package com.example.myapplication.usecases

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

interface UseCaseWithParams<P, O> {
    suspend fun buildAction(params: P): O

    fun buildActionAsync(params: P, callback: (O) -> Unit) {
        GlobalScope.launch { callback(buildAction(params)) }
    }

}