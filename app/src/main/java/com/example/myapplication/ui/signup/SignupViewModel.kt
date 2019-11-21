package com.example.myapplication.ui.signup

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.usecases.user.creation.CreateAccountWithCompleteInformation
import kotlinx.coroutines.launch


class SignupViewModel(
    private val createAccount: CreateAccountWithCompleteInformation
) : ViewModel() {

    val email = ObservableField("")
    val confirmEmail = ObservableField("")
    val password = ObservableField("")
    val confirmPassword = ObservableField("")
    val nickname = ObservableField("")

    fun create() = viewModelScope.launch {
        createAccount.buildAction(email.get()!!, password.get()!!, nickname.get()!!)
    }
}