package com.example.myapplication.datasource

import com.example.myapplication.exceptions.AuthException
import com.google.android.gms.tasks.Task
import com.google.firebase.auth.*
import com.google.firebase.storage.StorageException
import kotlinx.coroutines.CancellableContinuation
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

fun Exception.asCustom() = when (this) {
    is FirebaseAuthWeakPasswordException -> AuthException.AuthWeakPasswordException()
    is FirebaseAuthInvalidCredentialsException -> AuthException.AuthInvalidCredentialsException(message)
    is FirebaseAuthUserCollisionException -> AuthException.AuthUserCollisionException()
    is FirebaseAuthInvalidUserException -> AuthException.AuthInvalidUserException()
    is FirebaseAuthRecentLoginRequiredException -> AuthException.AuthRecentLoginRequiredException()
    is StorageException -> com.example.myapplication.exceptions.StorageException(message)
    else -> this
}

fun <T, K> Task<T>.asCoroutine(cont: CancellableContinuation<K>, onSuccess: (T) -> K) =
    addOnSuccessListener { cont.resume(onSuccess(it)) }
        .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
        .addOnCanceledListener { cont.cancel() }

suspend fun <T, K> wrapTask(taskProvider: () -> Task<T>, onSuccess: (T) -> K) =
    suspendCancellableCoroutine<K> {
        taskProvider().asCoroutine(it, onSuccess)
    }

suspend fun <T> wrapTask(taskProvider: () -> Task<T>) =
    suspendCancellableCoroutine<Boolean> {
        taskProvider().asCoroutine(it) { true }
    }