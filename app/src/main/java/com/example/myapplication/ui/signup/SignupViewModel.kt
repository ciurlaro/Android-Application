package com.example.myapplication.ui.signup

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel


class SignupViewModel : ViewModel() {

    val email = ObservableField("")
    val confirmEmail = ObservableField("")
    val password = ObservableField("")
    val confirmPassword = ObservableField("")
    val nickname = ObservableField("")

}