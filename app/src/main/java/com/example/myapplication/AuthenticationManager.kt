package com.example.myapplication

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope

interface AuthenticationManager {

    data class Action(
        val tag: String,
        val dispatcher: CoroutineScope = GlobalScope,
        val action: suspend () -> Unit
    )

    fun addOnLoginCallback(action: Action)
    fun removeOnLoginCallbacks(tag: String)
    fun addOnLogoutCallback(action: Action)
    fun removeOnLogoutCallbacks(action: String)
    fun loginWithEmailAndPassword(email: String, password: String)

}
