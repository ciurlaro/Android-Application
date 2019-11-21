package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.flow.Flow

interface JsUseCaseWithbParamsObservable<P, T> {


    fun buildAction(params: P): Observable<T>

}
