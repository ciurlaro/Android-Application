package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.MutableLiveData
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
    val loginError = MutableLiveData<AuthException>()
    val isLoginSuccessful = MutableLiveData<Boolean>()

    fun signinWithEmail() = viewModelScope.launch {
        try {
            isLoginSuccessful.value = signinWithEmailUseCase.buildAction(email.get()!!, password.get()!!)
        } catch (e: AuthException) {
            loginError.value = e
        }
    }

    fun signinWithFb(token: String) = viewModelScope.launch {
        try {
            isLoginSuccessful.value = signInWithFacebookUseCase.buildAction(SignInWithFacebookUseCase.Params(token))
        } catch (e: AuthException) {
            loginError.value = e
        }
    }

    fun signinWithGoogle(token: String, email: String) = viewModelScope.launch {
        try {
            isLoginSuccessful.value = signInWithGoogleUseCase.buildAction(token, email)
        } catch (e: AuthException) {
            loginError.value = e
        }
    }

}