package com.example.myapplication

import com.example.myapplication.AuthenticationManager.Action
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.ExperimentalCoroutinesApi
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
        if (firebaseAuth.currentUser != null)
            action()
    }

    override fun removeOnLoginCallbacks(tag: String) {
        onLoginCallbacks.remove(tag)
    }


    override fun addOnLogoutCallback(action: Action) {
        onLogoutCallbacks[action.tag] = action
        if (firebaseAuth.currentUser == null)
            action()
    }

    override fun removeOnLogoutCallbacks(action: String) {
        onLogoutCallbacks.remove(action)
    }

    override fun loginWithEmailAndPassword(email: String, password: String, onCompletion: (Boolean) -> Unit) {
        firebaseAuth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener { onCompletion(it.isSuccessful) }
    }

    private fun triggerLogin() =
        onLoginCallbacks.values.forEach { it() }


    private fun triggerLogout() =
        onLogoutCallbacks.values.forEach { it() }


}
