package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel

class LoginViewModel : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

}