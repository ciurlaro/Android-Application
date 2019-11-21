package com.example.myapplication.auth

import com.example.myapplication.datasource.FirebaseAuthDatasource
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException.*
import externals.firebase.AuthCredential
import externals.firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
import externals.firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD
import externals.firebase.auth.GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD
import kotlinx.coroutines.await

actual class FirebaseAuthDatasourceImplementation actual constructor(
    private val firebaseAuth: FirebaseAuth
) : FirebaseAuthDatasource {
    override suspend fun getCurrentAuthUser(): AuthUserEntity? {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun getCurrentUserClaims(): Map<String, Boolean> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun isCurrentUserEmailVerified(): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateUserEmail(email: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateUserPassword(password: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateUserNickname(nickname: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun updateUserProfileImage(image: String): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override suspend fun getToken(): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    private val currentFirebaseUser
        get() = firebaseAuth.currentUser ?: throw AuthNotAuthenticatedException()

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        loginWithAuthCredential(externals.firebase.auth.EmailAuthProvider.credential(email, password))

    override suspend fun loginWithFacebookToken(token: String) =
        loginWithAuthCredential(externals.firebase.auth.FacebookAuthProvider.credential(token))

    override suspend fun loginWithGoogleToken(token: String) =
        loginWithAuthCredential(externals.firebase.auth.GoogleAuthProvider.credential(token))

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        firebaseAuth.createUserWithEmailAndPassword(email, password).await().let { true }

    override suspend fun getCurrentUserAuthMethods() =
        fetchAvailableAuthMethodsByEmail(currentFirebaseUser.email!!)

    override suspend fun linkGoogleAuthProvider(token: String) =
        linkWithCredentials(externals.firebase.auth.GoogleAuthProvider.credential(token))

    override suspend fun linkFacebookAuthProvider(token: String) =
        linkWithCredentials(externals.firebase.auth.FacebookAuthProvider.credential(token))

    override suspend fun linkPasswordAuthProvider(password: String) =
        linkWithCredentials(externals.firebase.auth.EmailAuthProvider.credential(currentFirebaseUser.email!!, password))

    override suspend fun reauthenticateWithPassword(password: String) =
        reauthenticate(externals.firebase.auth.EmailAuthProvider.credential(currentFirebaseUser.email!!, password))

    override suspend fun reauthenticateWithGoogleToken(token: String) =
        reauthenticate(externals.firebase.auth.GoogleAuthProvider.credential(token))

    override suspend fun reauthenticateWithFacebook(token: String) =
        reauthenticate(externals.firebase.auth.FacebookAuthProvider.credential(token))

    private suspend fun loginWithAuthCredential(authCredential: AuthCredential) = try {
        firebaseAuth.signInWithCredential(authCredential).await()
        true
    } catch (e: Throwable) {
        throw e.asCustom()
    }

    private suspend fun fetchAvailableAuthMethodsByEmail(email: String) = try {
        firebaseAuth.fetchSignInMethodsForEmail(email).await()
            .mapNotNull {
                when (it) {
                    EMAIL_PASSWORD_SIGN_IN_METHOD -> AuthProviders.EMAIL_PASSWORD
                    FACEBOOK_SIGN_IN_METHOD -> AuthProviders.FACEBOOK
                    GOOGLE_SIGN_IN_METHOD -> AuthProviders.GOOGLE
                    else -> null
                }
            }
    } catch (e: Throwable) {
        throw e.asCustom()
    }

    private suspend fun reauthenticate(authCredential: AuthCredential) = try {
        currentFirebaseUser.reauthenticateWithCredential(authCredential).await()
        true
    } catch (e: Throwable) {
        throw e.asCustom()
    }

    private suspend fun linkWithCredentials(authCredential: AuthCredential) = try {
        currentFirebaseUser.linkWithCredential(authCredential).await()
        true
    } catch (e: Throwable) {
        throw e.asCustom()
    }

    private fun Throwable.asCustom() = when (message) {
        "auth/weak-password" -> AuthWeakPasswordException()
        "auth/invalid-credential", "auth/wrong-password", "auth/invalid-email" ->
            AuthInvalidCredentialsException(message)
        "auth/account-exists-with-different-credential" -> AuthUserCollisionException()
        "auth/operation-not-allowed", "auth/user-disabled", "auth/user-not-found" -> AuthInvalidUserException()
        "auth/requires-recent-login" -> AuthRecentLoginRequiredException()
        else -> AuthGenericException(message)
    }

}