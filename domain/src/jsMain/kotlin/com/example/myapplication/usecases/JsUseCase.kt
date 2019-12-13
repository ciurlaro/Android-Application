package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable

interface JsUseCase<T> {

    fun buildAction(): Observable<T>

}

