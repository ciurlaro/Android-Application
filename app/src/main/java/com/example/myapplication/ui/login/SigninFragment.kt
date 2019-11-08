package com.example.myapplication.ui.login

import android.os.Bundle
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.activity.addCallback
import androidx.navigation.fragment.navArgs
import com.example.myapplication.databinding.FragmentSigninBinding
import com.example.myapplication.ui.BaseFragment
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
class SigninFragment : BaseFragment() {

    private val args by navArgs<SigninFragmentArgs>()
    private val viewModel by viewModelInstance<SigninViewModel>()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSigninBinding.inflate(inflater, container, false)
            .also {
                it.viewModel = viewModel.apply {
                    email.set(args.email)
                    password.set(args.password)
                }
            }
            .root

    override fun onResume() {
        super.onResume()
        requireActivity().onBackPressedDispatcher.addCallback(this) {
            requireActivity().finishAndRemoveTask()
        }
    }


}