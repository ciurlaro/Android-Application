package com.example.myapplication

import androidx.lifecycle.LifecycleOwner
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

    fun addOnLoginCallback(owner: LifecycleOwner, action: Action)
    fun removeOnLoginCallbacks(tag: String)
    fun addOnLogoutCallback(owner: LifecycleOwner, action: Action)
    fun removeOnLogoutCallbacks(action: String)
    fun loginWithEmailAndPassword(email: String, password: String, onCompletion: (Boolean) -> Unit = {})

}