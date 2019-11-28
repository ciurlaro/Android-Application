package com.example.myapplication.ui.login

import androidx.databinding.ObservableField
import androidx.lifecycle.ViewModel

class SigninViewModel : ViewModel() {

    val email = ObservableField("")
    val password = ObservableField("")

}