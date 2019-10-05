package com.example.myapplication.usecases

interface UseCaseWithParams<T, R> {
    suspend fun buildAction(params: R): T
}