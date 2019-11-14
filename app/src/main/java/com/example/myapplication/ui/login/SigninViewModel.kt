package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.usecases.user.SigninUserUseCase
import kotlinx.coroutines.launch

class SigninViewModel(
    private val loginUserUseCase: SigninUserUseCase
) : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

    fun signIn() = viewModelScope.launch {
        loginUserUseCase.buildAction(email.get()!!, password.get()!!)
    }
}