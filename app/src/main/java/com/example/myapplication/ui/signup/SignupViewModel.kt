package com.example.myapplication.ui.signup

import androidx.appcompat.widget.AppCompatTextView
import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController

class SignupViewModel(
    private val navController: NavController
) : ViewModel() {

    val email = ObservableField("")
    val confirmEmail = ObservableField("")
    val password = ObservableField("")
    val confirmPassword = ObservableField("")
    val nickname = ObservableField("")

    fun onLoginTvClicked(view: AppCompatTextView) {
        view.isClickable = false
        navController.navigate(SignupFragmentDirections.actionSignupToSignin(email.get()!!, password.get()!!))
    }

}