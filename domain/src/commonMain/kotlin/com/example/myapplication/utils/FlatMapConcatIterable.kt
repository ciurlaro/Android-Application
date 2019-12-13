package com.example.myapplication.utils

import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapConcat

@FlowPreview
fun <T, R> Flow<T>.flatMapConcatIterable(function: suspend (T) -> Iterable<R>) =
    flatMapConcat { function(it).asFlow() }