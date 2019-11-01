package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.flow.Flow

interface JsUseCaseWithParamsObservable<U : UseCaseWithParams<P, Flow<T>>, P, T> {

    val usecase: U

    fun buildAction(params: P): Observable<T>

}