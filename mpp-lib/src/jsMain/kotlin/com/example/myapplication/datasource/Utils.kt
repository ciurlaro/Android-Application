package com.example.myapplication.datasource

import com.example.myapplication.exceptions.AuthException
import kotlinx.coroutines.await
import kotlin.js.Promise

fun Throwable.asCustom() = when (message) {
    "auth/weak-password" -> AuthException.AuthWeakPasswordException(message)
    "auth/invalid-credential", "auth/wrong-password", "auth/invalid-email" ->
        AuthException.AuthInvalidCredentialsException(message)
    "auth/account-exists-with-different-credential" -> AuthException.AuthUserCollisionException(message)
    "auth/operation-not-allowed", "auth/user-disabled", "auth/user-not-found" -> AuthException.AuthInvalidUserException(
        message
    )
    "auth/requires-recent-login" -> AuthException.AuthRecentLoginRequiredException(message)
    else -> AuthException.AuthGenericException(message)
}

suspend fun <T, R> wrapPromise(promiseProvider: () -> Promise<T>, onSuccess: (T) -> R) = try {
    onSuccess(promiseProvider().await())
} catch (e: Throwable) {
    throw e.asCustom()
}

suspend fun <T> wrapPromise(promiseProvider: () -> Promise<T>) = try {
    promiseProvider().await()
    true
} catch (e: Throwable) {
    throw e.asCustom()
}