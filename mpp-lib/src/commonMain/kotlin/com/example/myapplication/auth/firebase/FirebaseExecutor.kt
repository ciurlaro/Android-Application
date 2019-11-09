package com.example.myapplication.auth.firebase

import com.example.myapplication.entities.AuthProviders

interface FirebaseExecutor {
    suspend fun loginWithAuthCredential(authCredential: AuthCredential): Boolean
    suspend fun fetchAvailableAuthMethodsByEmail(email: String): List<AuthProviders>
    suspend fun reauthenticate(authCredential: AuthCredential): Boolean
    suspend fun linkWithCredentials(authCredential: AuthCredential): Boolean
    suspend fun createAccountWithEmailAndPassword(email: String, password: String): Boolean
    suspend fun getToken(): String
}