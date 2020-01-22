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
    is FirebaseAuthWeakPasswordException -> AuthException.AuthWeakPasswordException(message)
    is FirebaseAuthInvalidCredentialsException -> AuthException.AuthInvalidCredentialsException(message)
    is FirebaseAuthUserCollisionException -> AuthException.AuthUserCollisionException(message)
    is FirebaseAuthInvalidUserException -> AuthException.AuthInvalidUserException(message)
    is FirebaseAuthRecentLoginRequiredException -> AuthException.AuthRecentLoginRequiredException(message)
    is StorageException -> com.example.myapplication.exceptions.StorageException(message)
    else -> this
}

fun <T, K> Task<T>.addListeners(cont: CancellableContinuation<K>, onSuccess: (T) -> K) =
    addOnSuccessListener { cont.resume(onSuccess(it)) }
        .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
        .addOnCanceledListener { cont.cancel() }

suspend fun <T, K> wrapTask(taskProvider: () -> Task<T>, onSuccess: (T) -> K) =
    suspendCancellableCoroutine<K> {
        taskProvider().addListeners(it, onSuccess)
    }

suspend fun <T> wrapTask(taskProvider: () -> Task<T>) =
    suspendCancellableCoroutine<Boolean> {
        taskProvider().addListeners(it) { true }
    }

suspend fun <T> Task<T>.await() = suspendCancellableCoroutine<T> { cont ->
    addOnSuccessListener { cont.resume(it) }
    addOnCanceledListener { cont.cancel() }
    addOnFailureListener { cont.resumeWithException(it) }
}

suspend fun Task<Void>.awaitUnit() {
    await()
}