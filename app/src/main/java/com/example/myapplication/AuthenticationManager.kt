package com.example.myapplication

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

interface AuthenticationManager {

    data class Action(
        val tag: String,
        val dispatcher: CoroutineScope = GlobalScope,
        val action: suspend () -> Unit
    ) {
        operator fun invoke() =
            dispatcher.launch { action() }
    }

    fun addOnLoginCallback(action: Action)
    fun removeOnLoginCallbacks(tag: String)
    fun addOnLogoutCallback(action: Action)
    fun removeOnLogoutCallbacks(action: String)
    fun loginWithEmailAndPassword(email: String, password: String, onCompletion: (Boolean) -> Unit = {})

}

fun AuthenticationManager.addOnLoginCallback(tag: String, dispatcher: CoroutineScope = GlobalScope, action: suspend () -> Unit) =
    addOnLoginCallback(AuthenticationManager.Action(tag, dispatcher, action))

fun AuthenticationManager.addOnLogoutCallback(tag: String, dispatcher: CoroutineScope = GlobalScope, action: suspend () -> Unit) =
    addOnLoginCallback(AuthenticationManager.Action(tag, dispatcher, action))