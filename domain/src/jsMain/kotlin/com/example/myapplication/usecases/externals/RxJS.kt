@file:JsModule("rxjs")
@file:JsNonModule

package com.example.myapplication.usecases.externals

external class Observable<T>(function: (Subscriber<T>) -> Unit)

external class Subscriber<T> {
    fun next(element: T)
    fun complete()
    fun error(err: Throwable)
}