package com.example.myapplication.usecases

interface UseCase<T> {
    suspend fun buildAction(): T
}

interface UseCaseWithParams<T, R> {
    suspend fun buildAction(params: R): T
}