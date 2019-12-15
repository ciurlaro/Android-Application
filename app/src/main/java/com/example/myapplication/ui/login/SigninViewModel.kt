package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.usecases.user.login.SignInWithFacebookUseCase
import com.example.myapplication.usecases.user.login.SignInWithGoogleUseCase
import com.example.myapplication.usecases.user.login.SigninWithEmailUseCase
import kotlinx.coroutines.launch

class SigninViewModel(
    private val signinWithEmailUseCase: SigninWithEmailUseCase,
    private val signInWithFacebookUseCase: SignInWithFacebookUseCase,
    private val signInWithGoogleUseCase: SignInWithGoogleUseCase
) : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

    fun signinWithEmail(
        lifecycleCoroutineScope: LifecycleCoroutineScope,
        onError: suspend (AuthException) -> Unit = {},
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        try {
            val r = signinWithEmailUseCase.buildAction(email.get()!!, password.get()!!)
            lifecycleCoroutineScope.launch { action(r) }
        } catch (e: AuthException) {
            onError(e)
        }
    }

    fun signinWithFb(
        token: String,
        lifecycleCoroutineScope: LifecycleCoroutineScope,
        onError: suspend (AuthException) -> Unit = {},
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        try {
            val r = signInWithFacebookUseCase.buildAction(SignInWithFacebookUseCase.Params(token))
            lifecycleCoroutineScope.launch { action(r) }
        } catch (e: AuthException) {
            lifecycleCoroutineScope.launch { onError(e) }
        }
    }

    fun signinWithGoogle(
        token: String,
        lifecycleCoroutineScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val r = signInWithGoogleUseCase.buildAction(token)
        lifecycleCoroutineScope.launch { action(r) }
    }

}