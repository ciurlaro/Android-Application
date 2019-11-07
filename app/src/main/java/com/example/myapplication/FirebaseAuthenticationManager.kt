package com.example.myapplication

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import com.example.myapplication.AuthenticationManager.Action
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.ExperimentalCoroutinesApi


@ExperimentalCoroutinesApi
class FirebaseAuthenticationManager(
    private val firebaseAuth: FirebaseAuth
) : AuthenticationManager {

    init {
        firebaseAuth.addAuthStateListener {
            if (it.currentUser == null) triggerLogout() else triggerLogin()
        }
    }

    private val onLoginCallbacks = hashMapOf<String, Pair<Action, LifecycleOwner>>()
    private val onLogoutCallbacks = hashMapOf<String, Pair<Action, LifecycleOwner>>()

    override fun addOnLoginCallback(owner: LifecycleOwner, action: Action) {
        onLoginCallbacks[action.tag] = action to owner
        if (firebaseAuth.currentUser != null)
            action()
    }

    override fun removeOnLoginCallbacks(tag: String) {
        onLoginCallbacks.remove(tag)
    }


    override fun addOnLogoutCallback(owner: LifecycleOwner, action: Action) {
        onLogoutCallbacks[action.tag] = action to owner
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

    private fun triggerLogin() {
        val toRemove = mutableListOf<String>()
        onLoginCallbacks.values.forEach { (action, owner) ->
            if (owner.lifecycle.currentState != Lifecycle.State.DESTROYED)
                action()
            else toRemove.add(action.tag)
        }
        onLoginCallbacks.removeAll(toRemove)
    }


    private fun triggerLogout() {
        val toRemove = mutableListOf<String>()
        onLogoutCallbacks.values.forEach { (action, owner) ->
            if (owner.lifecycle.currentState != Lifecycle.State.DESTROYED)
                action()
            else toRemove.add(action.tag)
        }
        onLogoutCallbacks.removeAll(toRemove)
    }

}