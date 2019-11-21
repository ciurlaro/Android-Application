package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable

interface JsUseCaseWithParamsObservable<P, T> {

    fun buildAction(params: P): Observable<T>

}
