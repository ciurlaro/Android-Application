package com.example.myapplication.ui.login

import android.util.Log
import android.view.View
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import androidx.appcompat.widget.AppCompatTextView
import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import com.example.myapplication.AuthenticationManager

class SigninViewModel(
    private val authManager: AuthenticationManager,
    private val navController: NavController
) : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

    fun onLoginButtonClicked(
        buttonSignIn: AppCompatButton,
        emailEtv: AppCompatEditText,
        passwordEtv: AppCompatEditText
    ) {
        Log.d("SigninViewModel", "onLoginButtonClicked called")
        buttonSignIn.isClickable = false
        authManager.loginWithEmailAndPassword(email.get()!!, password.get()!!) {
            emailEtv.error = "Email or password wrong"
            passwordEtv.error = "Email or password wrong"
            buttonSignIn.isClickable = true
        }
    }

    fun onCreateAccountTvClicked(view: AppCompatTextView) {
        Log.d("SigninViewModel", "onCreateAccountTvClicked called")
        view.isClickable = false
        navController.navigate(SigninFragmentDirections.actionLoginToSignup(email.get()!!, password.get()!!))
    }

}