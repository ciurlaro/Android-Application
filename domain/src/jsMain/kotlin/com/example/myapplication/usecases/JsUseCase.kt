package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.flow.Flow

interface JsUseCase<U : UseCase<Flow<T>>, T> {

    val usecase: U

    fun buildAction(): Observable<T>

}

