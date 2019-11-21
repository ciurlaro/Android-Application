package com.example.myapplication.auth

import com.example.myapplication.datasource.FirebaseDatasource
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.exceptions.AuthException.*
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

    override suspend fun getToken() =
        getUserToken()

    override suspend fun getCurrentAuthUser() =
        firebaseAuth.currentUser ?: throw AuthNotAuthenticatedException()


    override suspend fun getCurrentUserClaims(): Map<String, Boolean>

    override suspend fun updateUserEmail(email: String) =
        updateEmailCredential(email)


    override suspend fun updateUserPassword(password: String) =
        updatePasswordCredential(password)

    override suspend fun updateUserNickname(nickname: String) =
        updateNicknameCredential(
            UserProfileChangeRequest.Builder()
                .setDisplayName(nickname).build()
        )

    override suspend fun updateUserProfileImage(image: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    private val currentFirebaseUser
        get() = firebaseAuth.currentUser ?: throw AuthNotAuthenticatedException()

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        loginWithAuthCredential(EmailAuthProvider.getCredential(email, password))

    override suspend fun loginWithFacebookToken(token: String) =
        loginWithAuthCredential(FacebookAuthProvider.getCredential(token))

    override suspend fun loginWithGoogleToken(token: String) =
        loginWithAuthCredential(GoogleAuthProvider.getCredential(token, null))

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        suspendCancellableCoroutine { continuation: CancellableContinuation<Boolean> ->
            firebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnSuccessListener { continuation.resume(true) }
                .addOnCanceledListener { continuation.cancel() }
                .addOnFailureListener { continuation.resumeWithException(it.asCustom()) }
        }

    override suspend fun getCurrentUserAuthMethods() =
        fetchAvailableAuthMethodsByEmail(currentFirebaseUser.email!!)

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
        suspendCancellableCoroutine { continuation: CancellableContinuation<Boolean> ->
            firebaseAuth.signInWithCredential(authCredential)
                .addOnSuccessListener { continuation.resume(true) }
                .addOnCanceledListener { continuation.cancel() }
                .addOnFailureListener { continuation.resumeWithException(it.asCustom()) }
        }

    private suspend fun fetchAvailableAuthMethodsByEmail(email: String) =
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
                    cont.resumeWithException(it.asCustom())
                }
        }

    private suspend fun reauthenticate(authCredential: AuthCredential) =
        suspendCancellableCoroutine<Boolean> { cont ->
            currentFirebaseUser.reauthenticate(authCredential)
                .addOnSuccessListener { cont.resume(true) }
                .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
                .addOnCanceledListener { cont.cancel() }
            return@suspendCancellableCoroutine
        }

    private suspend fun linkWithCredentials(authCredential: AuthCredential) =
        suspendCancellableCoroutine<Boolean> { cont ->
            currentFirebaseUser.linkWithCredential(authCredential)
                .addOnSuccessListener { cont.resume(true) }
                .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
                .addOnCanceledListener { cont.cancel() }
        }

    private suspend fun updateEmailCredential(email: String) =
        suspendCancellableCoroutine<Boolean> { cont ->
            currentFirebaseUser.updateEmail(email)
                .addOnSuccessListener { cont.resume(true) }
                .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
                .addOnCanceledListener { cont.cancel() }
        }

    private suspend fun updatePasswordCredential(password: String) =
        suspendCancellableCoroutine<Boolean> { cont ->
            currentFirebaseUser.updatePassword(password)
                .addOnSuccessListener { cont.resume(true) }
                .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
                .addOnCanceledListener { cont.cancel() }
        }

    private suspend fun updateNicknameCredential(profileUpdate: UserProfileChangeRequest) =
        suspendCancellableCoroutine<Boolean> { cont ->
            currentFirebaseUser.updateProfile(profileUpdate)
                .addOnSuccessListener { cont.resume(true) }
                .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
                .addOnCanceledListener { cont.cancel() }
        }

    private suspend fun updateProfileImageCredential(profileUpdate: UserProfileChangeRequest) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    private suspend fun getUserToken() =
        suspendCancellableCoroutine<String> { cont ->
            currentFirebaseUser.getIdToken(true)
                .addOnCompleteListener { cont.resume(it.result!!.token!!) }
                .addOnFailureListener { cont.resumeWithException(it.asCustom()) }
                .addOnCanceledListener { cont.cancel() }
        }

    private fun Exception.asCustom() = when (this) {
        is FirebaseAuthWeakPasswordException -> AuthWeakPasswordException()
        is FirebaseAuthInvalidCredentialsException -> AuthInvalidCredentialsException(message)
        is FirebaseAuthUserCollisionException -> AuthUserCollisionException()
        is FirebaseAuthInvalidUserException -> AuthInvalidUserException()
        is FirebaseAuthRecentLoginRequiredException -> AuthRecentLoginRequiredException()
        else -> AuthGenericException(message)
    }

}