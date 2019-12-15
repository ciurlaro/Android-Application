package com.example.myapplication.ui.signup

import androidx.databinding.ObservableField
import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.usecases.user.creation.CreateAccountWithCompleteInformation
import kotlinx.coroutines.launch


class SignupViewModel(
    private val createAccountWithCompleteInformation: CreateAccountWithCompleteInformation
) : ViewModel() {

    val email = ObservableField("")
    val confirmEmail = ObservableField("")
    val password = ObservableField("")
    val confirmPassword = ObservableField("")
    val nickname = ObservableField("")

    fun createAccountWithEmailAndPassword(
        lifecycleCoroutineScope: LifecycleCoroutineScope,
        onError: suspend (AuthException) -> Unit = {},
        onSuccess: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        try {
            val r = createAccountWithCompleteInformation.buildAction(email.get()!!, password.get()!!, nickname.get()!!)
            lifecycleCoroutineScope.launch { onSuccess(r) }
        } catch (e: AuthException) {
            lifecycleCoroutineScope.launch { onError(e) }
        }
    }

}