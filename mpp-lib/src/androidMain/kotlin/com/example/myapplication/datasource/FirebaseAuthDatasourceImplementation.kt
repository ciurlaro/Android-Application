package com.example.myapplication.datasource

import android.net.Uri
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException.AuthNotAuthenticatedException
import com.google.firebase.auth.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
actual class FirebaseAuthDatasourceImplementation actual constructor(
    private val firebaseAuth: FirebaseAuth
) : FirebaseAuthDatasource {

    private val currentFirebaseUser
        get() = firebaseAuth.currentUser ?: throw AuthNotAuthenticatedException()

    override suspend fun isCurrentUserEmailVerified() =
        currentFirebaseUser.isEmailVerified

    override suspend fun getToken() =
        getUserToken()

    override suspend fun getCurrentAuthUser() = firebaseAuth.currentUser?.let {
        AuthUserEntity(it.uid, it.email!!, it.displayName!!)
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

    override suspend fun logout() = firebaseAuth.signOut()

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        firebaseAuth.createUserWithEmailAndPassword(email, password).await().run { true }

    private val SignInMethodQueryResult.authProviders: List<AuthProviders>
        get() {
            val res = mutableListOf<AuthProviders>()
            if (EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD in signInMethods!!)
                res.add(AuthProviders.EMAIL_PASSWORD)
            if (GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD in signInMethods!!)
                res.add(AuthProviders.GOOGLE)
            if (FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD in signInMethods!!)
                res.add(AuthProviders.FACEBOOK)
            return res
        }

    override suspend fun getCurrentUserAuthMethods() =
        firebaseAuth.fetchSignInMethodsForEmail(currentFirebaseUser.email!!)
            .await()
            .authProviders

    override suspend fun getAuthMethodsForEmail(email: String) =
        firebaseAuth.fetchSignInMethodsForEmail(email)
            .await()
            .authProviders

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

    private fun profileBuilder(builder: UserProfileChangeRequest.Builder.() -> Unit) =
        UserProfileChangeRequest.Builder().apply(builder).build()

    private fun FirebaseUser.updateProfile(builder: UserProfileChangeRequest.Builder.() -> Unit) =
        updateProfile(profileBuilder(builder))

}