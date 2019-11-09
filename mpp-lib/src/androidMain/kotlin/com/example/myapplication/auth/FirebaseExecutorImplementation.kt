package com.example.myapplication.auth

import com.example.myapplication.auth.firebase.*
import com.example.myapplication.auth.firebase.AuthCredential
import com.example.myapplication.auth.firebase.EmailAuthProvider
import com.example.myapplication.auth.firebase.FacebookAuthProvider
import com.example.myapplication.auth.firebase.FirebaseAuth
import com.example.myapplication.auth.firebase.GoogleAuthProvider
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.exceptions.*
import com.google.firebase.auth.*
import kotlinx.coroutines.CancellableContinuation
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

class FirebaseExecutorImplementation(
    private val firebaseAuth: FirebaseAuth
) : FirebaseExecutor {

    override suspend fun loginWithAuthCredential(authCredential: AuthCredential) =
        suspendCancellableCoroutine { continuation: CancellableContinuation<Boolean> ->
            firebaseAuth.signInWithCredential(authCredential)
                .addOnSuccessListener {
                    continuation.resume(true)
                }
                .addOnCanceledListener {
                    continuation.cancel()
                }
                .addOnFailureListener {
                    continuation.resumeWithException(
                        when (it) {
                            is FirebaseAuthInvalidCredentialsException -> AuthInvalidTokenException()
                            is FirebaseAuthUserCollisionException -> AuthUserCollisionException()
                            else -> it
                        }
                    )
                }
        }

    override suspend fun fetchAvailableAuthMethodsByEmail(email: String) =
        suspendCancellableCoroutine<List<AuthProviders>> { cont ->
            firebaseAuth.fetchSignInMethodsForEmail(email)
                .addOnSuccessListener {
                    val res = mutableListOf<AuthProviders>()
                    if (EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD in it.signInMethods!!)
                        res.add(AuthProviders.EMAIL_PASSWORD)
                    if (GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD in it.signInMethods!!)
                        res.add(AuthProviders.GOOGLE)
                    if (FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD in it.signInMethods!!)
                        res.add(AuthProviders.GOOGLE)
                    cont.resume(res)
                }
                .addOnCanceledListener {
                    cont.cancel()
                }
                .addOnFailureListener {
                    cont.resumeWithException(AuthInvalidCredentialsException())
                }
        }

    override suspend fun reauthenticate(authCredential: AuthCredential) =
        suspendCancellableCoroutine<Boolean> { cont ->
            firebaseAuth.currentFirebaseUser.reauthenticate(authCredential)
                .addOnSuccessListener {
                    cont.resume(true)
                }
                .addOnFailureListener {
                    cont.resumeWithException(
                        when (it) {
                            is FirebaseAuthInvalidUserException -> AuthInvalidUserException()
                            is FirebaseAuthInvalidCredentialsException -> AuthInvalidCredentialsException(it.message)
                            else -> it
                        }
                    )
                }
                .addOnCanceledListener {
                    cont.cancel()
                }
            return@suspendCancellableCoroutine
        }

    override suspend fun linkWithCredentials(authCredential: AuthCredential) =
        suspendCancellableCoroutine<Boolean> { cont ->
            firebaseAuth.currentFirebaseUser.linkWithCredential(authCredential)
                .addOnSuccessListener { cont.resume(true) }
                .addOnFailureListener {
                    cont.resumeWithException(
                        when (it) {
                            is FirebaseAuthWeakPasswordException -> AuthWeakPasswordException()
                            is FirebaseAuthInvalidCredentialsException -> AuthInvalidCredentialsException(it.message)
                            is FirebaseAuthUserCollisionException -> AuthUserCollisionException()
                            is FirebaseAuthInvalidUserException -> AuthInvalidCredentialsException()
                            is FirebaseAuthRecentLoginRequiredException -> AuthRecentLoginRequiredException()
                            else -> it
                        }
                    )
                }
                .addOnCanceledListener { cont.cancel() }
        }

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        suspendCancellableCoroutine { continuation: CancellableContinuation<Boolean> ->
            firebaseAuth.createUserWithEmailAndPassword(email, password).addOnCompleteListener { taskResult ->
                continuation.resume(taskResult.isSuccessful)
            }
                .addOnCanceledListener {
                    continuation.cancel()
                }
                .addOnFailureListener {
                    continuation.resumeWithException(
                        when (it) {
                            is FirebaseAuthWeakPasswordException -> AuthWeakPasswordException()
                            is FirebaseAuthInvalidCredentialsException -> AuthMalformedEmailException()
                            is FirebaseAuthUserCollisionException -> AuthUserCollisionException()
                            else -> it
                        }
                    )
                }
        }

    override suspend fun getToken() = suspendCancellableCoroutine<String> { cont ->
        firebaseAuth.currentFirebaseUser.getIdToken(false)
            .addOnSuccessListener { cont.resume(it.token!!) }
            .addOnCanceledListener { cont.cancel() }
            .addOnFailureListener {
                cont.resumeWithException(
                    when (it) {
                        is FirebaseAuthInvalidUserException -> AuthInvalidUserException(it.message)
                        else -> it
                    }
                )
            }
    }

}