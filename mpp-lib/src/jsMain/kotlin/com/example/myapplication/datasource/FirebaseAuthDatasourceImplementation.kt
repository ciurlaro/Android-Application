package com.example.myapplication.datasource

import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException.AuthNotAuthenticatedException
import externals.firebase.AuthCredential
import externals.firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
import externals.firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD
import externals.firebase.auth.GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD

actual class FirebaseAuthDatasourceImplementation actual constructor(
    private val firebaseAuth: FirebaseAuth
) : FirebaseAuthDatasource {

    private val currentFirebaseUser
        get() = firebaseAuth.currentUser ?: throw AuthNotAuthenticatedException()

    override suspend fun getCurrentAuthUser() =
        currentFirebaseUser.let { AuthUserEntity(it.uid!!, it.email!!, it.displayName!!, it.photoURL) }

    override suspend fun getCurrentUserClaims() =
        wrapPromise({ currentFirebaseUser.getIdTokenResult() }) {
            mapOf("isSubscriber" to (it.claims.isSubscriber as? Boolean ?: false))
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

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        loginWithAuthCredential(externals.firebase.auth.EmailAuthProvider.credential(email, password))

    override suspend fun loginWithFacebookToken(token: String) =
        loginWithAuthCredential(externals.firebase.auth.FacebookAuthProvider.credential(token))

    override suspend fun loginWithGoogleToken(token: String) =
        loginWithAuthCredential(externals.firebase.auth.GoogleAuthProvider.credential(token))

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        wrapPromise { firebaseAuth.createUserWithEmailAndPassword(email, password) }

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

    private suspend fun loginWithAuthCredential(authCredential: AuthCredential) =
        wrapPromise { firebaseAuth.signInWithCredential(authCredential) }

    private suspend fun fetchAvailableAuthMethodsByEmail(email: String) =
        wrapPromise({ firebaseAuth.fetchSignInMethodsForEmail(email) }) {
            it.mapNotNull {
                when (it) {
                    EMAIL_PASSWORD_SIGN_IN_METHOD -> AuthProviders.EMAIL_PASSWORD
                    FACEBOOK_SIGN_IN_METHOD -> AuthProviders.FACEBOOK
                    GOOGLE_SIGN_IN_METHOD -> AuthProviders.GOOGLE
                    else -> null
                }
            }
        }

    private suspend fun reauthenticate(authCredential: AuthCredential) =
        wrapPromise { currentFirebaseUser.reauthenticateWithCredential(authCredential) }

    private suspend fun linkWithCredentials(authCredential: AuthCredential) =
        wrapPromise { currentFirebaseUser.linkWithCredential(authCredential) }

}