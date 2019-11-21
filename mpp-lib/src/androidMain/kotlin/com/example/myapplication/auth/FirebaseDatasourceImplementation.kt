package com.example.myapplication.auth

import android.net.Uri
import com.example.myapplication.datasource.FirebaseDatasource
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException.*
import com.google.android.gms.tasks.Task
import com.google.firebase.auth.*
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.CancellableContinuation
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

@ExperimentalCoroutinesApi
actual class FirebaseDatasourceImplementation actual constructor(
    private val firebaseAuth: FirebaseAuth
) : FirebaseDatasource {

    private val currentFirebaseUser
        get() = firebaseAuth.currentUser ?: throw AuthNotAuthenticatedException()

    override suspend fun isCurrentUserEmailVerified(): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun getToken() =
        getUserToken()

    override suspend fun getCurrentAuthUser() = currentFirebaseUser.let {
        AuthUserEntity(it.uid, it.email!!, it.displayName!!, it.photoUrl.toString())
    }

    override suspend fun getCurrentUserClaims() =
        wrapTask({ currentFirebaseUser.getIdToken(true) }) {
            val isSubscriber = it.claims["isSubscriber"] as? Boolean
                ?: it.claims["isSubscriber"]?.toString()?.toBoolean()
                ?: false
            mapOf("isSubscriber" to isSubscriber)
        }

    override suspend fun updateUserEmail(email: String) =
        updateEmailCredential(email)

    override suspend fun updateUserPassword(password: String) =
        wrapTask { currentFirebaseUser.updatePassword(password) }

    override suspend fun updateUserNickname(nickname: String) =
        wrapTask { currentFirebaseUser.updateProfile { setDisplayName(nickname) } }

    override suspend fun updateUserProfileImage(image: String) =
        wrapTask { currentFirebaseUser.updateProfile { setPhotoUri(Uri.parse(image)) } }

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        loginWithAuthCredential(EmailAuthProvider.getCredential(email, password))

    override suspend fun loginWithFacebookToken(token: String) =
        loginWithAuthCredential(FacebookAuthProvider.getCredential(token))

    override suspend fun loginWithGoogleToken(token: String) =
        loginWithAuthCredential(GoogleAuthProvider.getCredential(token, null))

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        wrapTask { firebaseAuth.createUserWithEmailAndPassword(email, password) }

    override suspend fun getCurrentUserAuthMethods() =
        wrapTask({ firebaseAuth.fetchSignInMethodsForEmail(currentFirebaseUser.email!!) }) {
            val res = mutableListOf<AuthProviders>()
            if (EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD in it.signInMethods!!)
                res.add(AuthProviders.EMAIL_PASSWORD)
            if (GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD in it.signInMethods!!)
                res.add(AuthProviders.GOOGLE)
            if (FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD in it.signInMethods!!)
                res.add(AuthProviders.GOOGLE)
            res
        }

    override suspend fun reauthenticateWithPassword(password: String) =
        reauthenticate(EmailAuthProvider.getCredential(currentFirebaseUser.email!!, password))

    override suspend fun reauthenticateWithGoogleToken(token: String) =
        reauthenticate(GoogleAuthProvider.getCredential(token, null))

    override suspend fun reauthenticateWithFacebook(token: String) =
        reauthenticate(FacebookAuthProvider.getCredential(token))

    override suspend fun linkGoogleAuthProvider(token: String) =
        linkWithCredentials(GoogleAuthProvider.getCredential(token, null))

    override suspend fun linkFacebookAuthProvider(token: String) =
        linkWithCredentials(FacebookAuthProvider.getCredential(token))

    override suspend fun linkPasswordAuthProvider(password: String) =
        linkWithCredentials(EmailAuthProvider.getCredential(currentFirebaseUser.email!!, password))

    private suspend fun loginWithAuthCredential(authCredential: AuthCredential) =
        wrapTask { firebaseAuth.signInWithCredential(authCredential) }

    private suspend fun reauthenticate(authCredential: AuthCredential) =
        wrapTask { currentFirebaseUser.reauthenticate(authCredential) }

    private suspend fun linkWithCredentials(authCredential: AuthCredential) =
        wrapTask { currentFirebaseUser.linkWithCredential(authCredential) }

    private suspend fun updateEmailCredential(email: String) =
        wrapTask { currentFirebaseUser.updateEmail(email) }

    private suspend fun getUserToken() =
        wrapTask({ currentFirebaseUser.getIdToken(true) }) {
            it!!.token!!
        }

    private fun Exception.asCustom() = when (this) {
        is FirebaseAuthWeakPasswordException -> AuthWeakPasswordException()
        is FirebaseAuthInvalidCredentialsException -> AuthInvalidCredentialsException(message)
        is FirebaseAuthUserCollisionException -> AuthUserCollisionException()
        is FirebaseAuthInvalidUserException -> AuthInvalidUserException()
        is FirebaseAuthRecentLoginRequiredException -> AuthRecentLoginRequiredException()
        else -> AuthGenericException(message)
    }

    private fun <T, K> Task<T>.asCoroutine(cont: CancellableContinuation<K>, onSuccess: (T) -> K) =
        addOnSuccessListener { cont.resume(onSuccess(it)) }
            .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
            .addOnCanceledListener { cont.cancel() }

    private suspend fun <T, K> wrapTask(taskProvider: () -> Task<T>, onSuccess: (T) -> K) =
        suspendCancellableCoroutine<K> {
            taskProvider().asCoroutine(it, onSuccess)
        }

    private suspend fun <T> wrapTask(taskProvider: () -> Task<T>) =
        suspendCancellableCoroutine<Boolean> {
            taskProvider().asCoroutine(it) { true }
        }

    private fun profileBuilder(builder: UserProfileChangeRequest.Builder.() -> Unit) =
        UserProfileChangeRequest.Builder().apply(builder).build()

    private fun FirebaseUser.updateProfile(builder: UserProfileChangeRequest.Builder.() -> Unit) =
        updateProfile(profileBuilder(builder))

}