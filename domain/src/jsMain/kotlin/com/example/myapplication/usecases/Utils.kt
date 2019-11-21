package com.example.myapplication.usecases

import com.example.myapplication.usecases.externals.Observable
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.promise
import kotlin.js.Promise

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

fun <T> UseCaseSuspending<T>.asPromiseUseCase() = object : JsUseCasePromise<T> {
    override fun buildAction() = GlobalScope.promise {
        this@asPromiseUseCase.buildAction()
    }
}

@ExperimentalCoroutinesApi
fun <K, P, T : Flow<K>> UseCaseWithParams<P, T>.asObservableUseCase() = object : JsUseCaseWithParamsObservable<P, K> {
    override fun buildAction(params: P) = this@asObservableUseCase.buildAction(params).toObservable()

}
