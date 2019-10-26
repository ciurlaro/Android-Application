package com.example.myapplication.usecases

interface UseCaseWithParams<P, O> {
    fun buildAction(params: P): O
}