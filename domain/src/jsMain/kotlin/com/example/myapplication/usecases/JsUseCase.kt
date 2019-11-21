package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.flow.Flow

interface JsUseCase<T> {

    fun buildAction(): Observable<T>

}

