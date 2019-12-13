package com.example.myapplication.usecases

interface UseCaseWithParamsSuspending<P, O> {
    suspend fun buildAction(params: P): O
}