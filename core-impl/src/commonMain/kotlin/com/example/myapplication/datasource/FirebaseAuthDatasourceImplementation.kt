package com.example.myapplication.datasource

import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException
import com.github.lamba92.firebasemultiplatform.auth.*

class FirebaseAuthDatasourceImplementation(private val firebaseAuth: FirebaseAuth) : FirebaseAuthDatasource {

    private val userOrError
        get() = firebaseAuth.getCurrentUser() ?: throw AuthException.AuthNotAuthenticatedException()

    private val List<String>.authProviders
        get() = mapNotNull {
            when (it) {
                in GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD -> AuthProviders.GOOGLE
                in FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD -> AuthProviders.FACEBOOK
                in EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD -> AuthProviders.EMAIL_PASSWORD
                else -> null
            }
        }

    override suspend fun updateUserEmail(email: String) =
        userOrError.updateEmail(email).let { true }

    override suspend fun updateUserPassword(password: String) =
        userOrError.updatePassword(password).let { true }

    override suspend fun updateUserNickname(nickname: String) =
        userOrError.updateProfile(UserProfileChangeRequest.Builder().apply {
            displayName = nickname
        }.build()).let { true }

    override suspend fun updateUserProfileImage(image: String) =
        userOrError.updateProfile(UserProfileChangeRequest.Builder().apply {
            photoUrl = image
        }.build()).let { true }

    override suspend fun loginWithEmailAndPassword(email: String, password: String) =
        firebaseAuth.createUserWithEmailAndPassword(email, password).let { true }

    override suspend fun loginWithFacebookToken(token: String) =
        firebaseAuth.signInWithCredential(FacebookAuthProvider.getCredential(token)).let { true }

    override suspend fun loginWithGoogleToken(token: String) =
        firebaseAuth.signInWithCredential(GoogleAuthProvider.getCredentials(token)).let { true }

    override suspend fun logout() =
        firebaseAuth.signOut()

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String) =
        firebaseAuth.createUserWithEmailAndPassword(email, password).let { true }

    override suspend fun getCurrentUserAuthMethods() =
        firebaseAuth.fetchSignInMethodsForEmail(userOrError.email!!)
            .authProviders

    override suspend fun linkGoogleAuthProvider(token: String) =
        userOrError.linkWithCredentials(GoogleAuthProvider.getCredentials(token, null)).let { true }

    override suspend fun linkFacebookAuthProvider(token: String) =
        userOrError.linkWithCredentials(FacebookAuthProvider.getCredential(token)).let { true }

    override suspend fun linkPasswordAuthProvider(password: String) =
        userOrError.linkWithCredentials(EmailAuthProvider.getCredentials(userOrError.email!!, password)).let { true }

    override suspend fun reauthenticateWithPassword(password: String) =
        userOrError.reauthenticate(EmailAuthProvider.getCredentials(userOrError.email!!, password)).let { true }

    override suspend fun reauthenticateWithGoogleToken(token: String) =
        userOrError.reauthenticate(GoogleAuthProvider.getCredentials(token)).let { true }

    override suspend fun reauthenticateWithFacebook(token: String) =
        userOrError.reauthenticate(FacebookAuthProvider.getCredential(token)).let { true }

    override suspend fun getToken() =
        userOrError.getIdToken(true).token!!

    override suspend fun getCurrentAuthUser() = firebaseAuth.getCurrentUser()?.let {
        AuthUserEntity(it.uid, it.email!!, it.displayName!!, it.photoUrl)
    }

    override suspend fun getCurrentUserClaims() =
        userOrError.getIdToken(true).let {
            val isSubscriber = it.claims["isSubscriber"] as? Boolean
                ?: it.claims["isSubscriber"]?.toString()?.toBoolean()
                ?: false
            mapOf("isSubscriber" to isSubscriber)
        }


    override suspend fun isCurrentUserEmailVerified() =
        userOrError.isEmailVerified

    override suspend fun getAuthMethodsForEmail(email: String) =
        firebaseAuth.fetchSignInMethodsForEmail(email)
            .authProviders

}
