package com.example.myapplication.usecases

interface UseCaseSuspending<T> {

    suspend fun buildAction(): T

}