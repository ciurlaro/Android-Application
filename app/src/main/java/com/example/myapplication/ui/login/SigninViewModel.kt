package com.example.myapplication.ui.login

import android.content.res.Resources
import android.util.Log
import android.view.View.*
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import androidx.appcompat.widget.AppCompatTextView
import androidx.core.widget.ContentLoadingProgressBar
import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import com.example.myapplication.AuthenticationManager
import com.example.myapplication.R

class SigninViewModel(
    private val authManager: AuthenticationManager,
    private val navController: NavController,
    private val resources: Resources
) : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

    fun onLoginButtonClicked(
        buttonSignIn: AppCompatButton,
        emailEtv: AppCompatEditText,
        passwordEtv: AppCompatEditText,
        signinProgressBar: ContentLoadingProgressBar
    ) {
        var asErrored = false
        if (emailEtv.text.isNullOrEmpty()) {
            emailEtv.error = resources.getString(R.string.must_not_be_empty)
            asErrored = true
        }
        if (passwordEtv.text.isNullOrEmpty()) {
            passwordEtv.error = resources.getString(R.string.must_not_be_empty)
            asErrored = true
        }
        if (!asErrored) {
            Log.d("SigninViewModel", "onLoginButtonClicked called")
            buttonSignIn.isClickable = false
            buttonSignIn.visibility = INVISIBLE
            signinProgressBar.visibility = VISIBLE
            signinProgressBar.show()
            authManager.loginWithEmailAndPassword(email.get()!!, password.get()!!) {
                emailEtv.error = resources.getString(R.string.email_or_password_wrong)
                passwordEtv.error = resources.getString(R.string.email_or_password_wrong)
                buttonSignIn.visibility = VISIBLE
                signinProgressBar.visibility = GONE
                buttonSignIn.isClickable = true
            }
        }
    }

    fun onCreateAccountTvClicked(view: AppCompatTextView) {
        Log.d("SigninViewModel", "onCreateAccountTvClicked called")
        view.isClickable = false
        navController.navigate(SigninFragmentDirections.actionLoginToSignup(email.get()!!, password.get()!!))
    }
}