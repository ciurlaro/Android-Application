package com.example.myapplication.ui.signup

import android.os.Bundle
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.navigation.fragment.navArgs
import com.example.myapplication.databinding.FragmentSignupBinding
import com.example.myapplication.ui.BaseFragment
import kotlinx.coroutines.ExperimentalCoroutinesApi
import org.kodein.di.erased.instance

@ExperimentalCoroutinesApi
class SignupFragment : BaseFragment() {

    private val viewModel by viewModelInstance<SignupViewModel>()
    private val args by navArgs<SignupFragmentArgs>()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSignupBinding.inflate(inflater, container, false).also {
            it.viewModel = viewModel.apply {
                email.set(args.email)
                password.set(args.password)
            }
        }.root

}