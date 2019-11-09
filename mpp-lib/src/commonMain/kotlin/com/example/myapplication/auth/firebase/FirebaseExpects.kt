package com.example.myapplication.auth.firebase

import com.example.myapplication.exceptions.AuthNotAuthenticatedException

expect class FirebaseAuth {

    fun getCurrentUser(): FirebaseUser?

}

val FirebaseAuth.currentFirebaseUser
    get() = getCurrentUser() ?: throw AuthNotAuthenticatedException()

expect abstract class FirebaseUser {
    abstract fun getUid(): String
    abstract fun getEmail(): String?
}

expect abstract class AuthCredential

expect object GoogleAuthProvider {
    val GOOGLE_SIGN_IN_METHOD: String
    fun getCredential(var1: String?, var2: String?): AuthCredential
}

expect object FacebookAuthProvider {
    val FACEBOOK_SIGN_IN_METHOD: String
    fun getCredential(var1: String): AuthCredential
}

expect object EmailAuthProvider {
    val EMAIL_PASSWORD_SIGN_IN_METHOD: String
    fun getCredential(var1: String, var2: String): AuthCredential
}