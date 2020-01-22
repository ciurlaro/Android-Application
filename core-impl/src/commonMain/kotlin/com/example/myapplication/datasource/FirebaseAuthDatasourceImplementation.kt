package com.example.myapplication.datasource

import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException
import com.github.lamba92.firebasemultiplatform.auth.FacebookAuthProvider
import com.github.lamba92.firebasemultiplatform.auth.FirebaseAuth
import com.github.lamba92.firebasemultiplatform.auth.GoogleAuthProvider
import com.github.lamba92.firebasemultiplatform.auth.UserProfileChangeRequest

class FirebaseAuthDatasourceImplementation(val firebaseAuth: FirebaseAuth) : FirebaseAuthDatasource {

    private val userOrError
        get() = firebaseAuth.getCurrentUser() ?: throw AuthException.AuthNotAuthenticatedException()

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

    override suspend fun logout() {
        TODO("Not yet implemented")
    }

    override suspend fun createAccountWithEmailAndPassword(email: String, password: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun getCurrentUserAuthMethods(): List<AuthProviders> {
        TODO("Not yet implemented")
    }

    override suspend fun linkGoogleAuthProvider(token: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun linkFacebookAuthProvider(token: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun linkPasswordAuthProvider(password: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun reauthenticateWithPassword(password: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun reauthenticateWithGoogleToken(token: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun reauthenticateWithFacebook(token: String): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun getToken(): String {
        TODO("Not yet implemented")
    }

    override suspend fun getCurrentAuthUser(): AuthUserEntity? {
        TODO("Not yet implemented")
    }

    override suspend fun getCurrentUserClaims(): Map<String, Boolean> {
        TODO("Not yet implemented")
    }

    override suspend fun isCurrentUserEmailVerified(): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun getAuthMethodsForEmail(email: String): List<AuthProviders> {
        TODO("Not yet implemented")
    }

}