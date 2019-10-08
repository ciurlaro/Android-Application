package com.example.myapplication.usecases

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

interface UseCase<T> {

    suspend fun buildAction(): T

    fun buildActionAsync(callback: (T) -> Unit) {
        GlobalScope.launch { callback(buildAction()) }
    }

}