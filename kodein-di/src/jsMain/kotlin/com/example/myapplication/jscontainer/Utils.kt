package com.example.myapplication.jscontainer

import com.example.myapplication.usecases.UseCaseWithParamsSuspending
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

fun <P, O> UseCaseWithParamsSuspending<P, O>.asPromise(params: P) =
    GlobalScope.promise { buildAction(params) }