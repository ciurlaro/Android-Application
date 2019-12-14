package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.usecases.user.login.SignInwithFacebookUseCase
import com.example.myapplication.usecases.user.login.SigninWithEmailUseCase
import kotlinx.coroutines.launch

class SigninViewModel(
    private val signinWithEmailUseCase: SigninWithEmailUseCase,
    private val signInwithFacebookUseCase: SignInwithFacebookUseCase
) : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

    fun signinWithEmail(
        lifecycleCoroutineScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val r = signinWithEmailUseCase.buildAction(email.get()!!, password.get()!!)
        lifecycleCoroutineScope.launch { action(r) }
    }

    fun signinWithFb(
        token: String,
        lifecycleCoroutineScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val r = signInwithFacebookUseCase.buildAction(SignInwithFacebookUseCase.Params(token))
        lifecycleCoroutineScope.launch { action(r) }
    }

}