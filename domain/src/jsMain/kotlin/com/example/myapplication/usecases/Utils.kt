package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.*

@ExperimentalCoroutinesApi
fun <T> Flow<T>.toObservable() =
    Observable<T> { subscriber ->
        catch {
            if (it !is CancellationException)
                subscriber.error(it)
            else subscriber.complete()
        }
            .onEach { e -> subscriber.next(e) }
            .onCompletion { subscriber.complete() }
            .launchIn(GlobalScope)
    }
