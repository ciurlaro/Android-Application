package com.example.myapplication.auth

import com.example.myapplication.auth.firebase.*
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.*
import kotlinx.coroutines.CancellableContinuation
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

@ExperimentalCoroutinesApi
class FirebaseAuthenticationManager(
    private val firebaseAuth: FirebaseAuth,
    private val firebaseExecutor: FirebaseExecutor
) : AuthenticationManager {

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        firebaseExecutor.loginWithAuthCredential(EmailAuthProvider.getCredential(email, password))

    override suspend fun loginWithFacebookToken(token: String) =
        firebaseExecutor.loginWithAuthCredential(FacebookAuthProvider.getCredential(token))

    override suspend fun loginWithGoogleToken(token: String) =
        firebaseExecutor.loginWithAuthCredential(GoogleAuthProvider.getCredential(token, null))

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        firebaseExecutor.createAccountWithEmailAndPassword(email, password)

    override suspend fun getToken() =
        firebaseExecutor.getToken()

    override fun getCurrentUser() = firebaseAuth.getCurrentUser()?.let {
        AuthUserEntity(it.getUid(), it.getEmail()!!)
    }

    override suspend fun getCurrentUserAuthMethods() =
        firebaseExecutor.fetchAvailableAuthMethodsByEmail(firebaseAuth.currentFirebaseUser.getEmail()!!)

    override suspend fun reauthenticateWithPassword(password: String) =
        firebaseExecutor.reauthenticate(EmailAuthProvider.getCredential(firebaseAuth.currentFirebaseUser.getEmail()!!, password))

    override suspend fun reauthenticateWithGoogleToken(token: String) =
        firebaseExecutor.reauthenticate(GoogleAuthProvider.getCredential(token, null))

    override suspend fun reauthenticateWithFacebook(token: String) =
        firebaseExecutor.reauthenticate(FacebookAuthProvider.getCredential(token))

    override suspend fun linkGoogleAuthProvider(token: String) =
        firebaseExecutor.linkWithCredentials(GoogleAuthProvider.getCredential(token, null))

    override suspend fun linkFacebookAuthProvider(token: String)=
        firebaseExecutor.linkWithCredentials(FacebookAuthProvider.getCredential(token))

    override suspend fun linkPasswordAuthProvider(password: String)=
        firebaseExecutor.linkWithCredentials(EmailAuthProvider.getCredential(firebaseAuth.currentFirebaseUser.getEmail()!!, password))

}