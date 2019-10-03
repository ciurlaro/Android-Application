package com.example.myapplication.usecases

interface UseCase<T> {
    suspend fun buildAction(): T
}

