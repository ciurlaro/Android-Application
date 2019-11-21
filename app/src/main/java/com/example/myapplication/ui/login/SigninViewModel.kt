package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.usecases.user.login.SigninUserUseCase
import kotlinx.coroutines.launch

class SigninViewModel(
    private val signinUserUseCase: SigninUserUseCase
) : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

    fun signIn() = viewModelScope.launch {
        signinUserUseCase.buildAction(email.get()!!, password.get()!!)
    }
}