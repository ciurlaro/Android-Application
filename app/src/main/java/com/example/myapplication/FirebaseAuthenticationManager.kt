package com.example.myapplication

import com.example.myapplication.AuthenticationManager.*
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.launch

@ExperimentalCoroutinesApi
class FirebaseAuthenticationManager(
    private val firebaseAuth: FirebaseAuth
) : AuthenticationManager {

    init {
        firebaseAuth.addAuthStateListener {
            if (it.currentUser == null) triggerLogout() else triggerLogin()
        }
    }

    private val onLoginCallbacks = hashMapOf<String, Action>()
    private val onLogoutCallbacks = hashMapOf<String, Action>()

    override fun addOnLoginCallback(action: Action) {
        onLoginCallbacks[action.tag] = action
    }

    fun addOnLoginCallback(tag: String, dispatcher: CoroutineScope = GlobalScope, action: suspend () -> Unit) =
        addOnLoginCallback(Action(tag, dispatcher, action))


    override fun removeOnLoginCallbacks(tag: String) {
        onLoginCallbacks.remove(tag)
    }

    override fun addOnLogoutCallback(action: Action) {
        onLogoutCallbacks[action.tag] = action
    }

    fun addOnLogoutCallback(tag: String, dispatcher: CoroutineScope = GlobalScope, action: suspend () -> Unit) =
        addOnLoginCallback(Action(tag, dispatcher, action))

    override fun removeOnLogoutCallbacks(action: String) {
        onLogoutCallbacks.remove(action)
    }

    override fun loginWithEmailAndPassword(email: String, password: String) {
        firebaseAuth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener {
                it.isComplete
            }
    }

    private fun triggerLogin() {
        onLoginCallbacks.values.forEach {
            it.dispatcher.launch { it.action() }
        }
    }

    private fun triggerLogout() {
        onLogoutCallbacks.values.forEach {
            it.dispatcher.launch { it.action() }
        }
    }

}