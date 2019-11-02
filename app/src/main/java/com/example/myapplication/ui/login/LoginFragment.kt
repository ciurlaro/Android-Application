package com.example.myapplication.ui.login

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.databinding.FragmentSignInBinding
import com.example.myapplication.ui.BaseFragment


class LoginFragment : BaseFragment() {

    private val viewModel: LoginViewModel by viewModelInstance()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSignInBinding.inflate(inflater, container, false)
            .also { it.viewModel = viewModel }
            .root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

    }
}