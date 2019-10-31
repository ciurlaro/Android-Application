package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.flow.Flow

interface JsUseCaseWithParams<U : UseCaseWithParams<P, Flow<T>>, P, T> {

    val useCase: U

    fun buildAction(params: P): Observable<T>

}