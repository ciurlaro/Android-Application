package com.example.myapplication.usecases

interface UseCaseWithParamSuspending<P, O> {
    suspend fun buildAction(params: P): O
}