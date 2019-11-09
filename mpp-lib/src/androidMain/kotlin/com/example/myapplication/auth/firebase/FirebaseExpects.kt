package com.example.myapplication.auth.firebase

import com.google.firebase.auth.AuthCredential
import com.google.firebase.auth.EmailAuthProvider
import com.google.firebase.auth.FacebookAuthProvider
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.auth.GoogleAuthProvider

actual typealias FirebaseAuth = FirebaseAuth

actual typealias FirebaseUser = FirebaseUser

actual typealias AuthCredential = AuthCredential

actual object GoogleAuthProvider {
    actual val GOOGLE_SIGN_IN_METHOD = GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD
    actual fun getCredential(var1: String?, var2: String?) =
        GoogleAuthProvider.getCredential(var1, var2)
}

actual object FacebookAuthProvider {

    actual val FACEBOOK_SIGN_IN_METHOD = FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD
    actual fun getCredential(var1: String) =
        FacebookAuthProvider.getCredential(var1)

}

actual object EmailAuthProvider {

    actual val EMAIL_PASSWORD_SIGN_IN_METHOD = EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
    actual fun getCredential(var1: String, var2: String) =
        EmailAuthProvider.getCredential(var1, var2)

}