package com.example.myapplication.ui.login

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ProgressBar
import androidx.activity.addCallback
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import androidx.appcompat.widget.AppCompatTextView
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentSigninBinding
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.MainActivity
import kotlinx.android.synthetic.main.fragment_signin.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch

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

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        button_sign_in.setOnClickListener {
            lifecycleScope.launch { onLoginButtonClicked() }
        }
        create_account_tv.setOnClickListener {
            onCreateAccountTvClicked()
        }
    }

    private suspend fun onLoginButtonClicked() {
        var asErrored = false
        if (email_etv.text.isNullOrEmpty()) {
            email_etv.error = resources.getString(R.string.must_not_be_empty)
            asErrored = true
        }
        if (password_etv.text.isNullOrEmpty()) {
            password_etv.error = resources.getString(R.string.must_not_be_empty)
            asErrored = true
        }
        if (!asErrored) {
            button_sign_in.isClickable = false
            create_account_tv.isClickable = false
            button_sign_in.visibility = View.INVISIBLE
            signin_progress_bar.visibility = View.VISIBLE

            if (authManager.loginWithEmailAndPassword(viewModel.email.get()!!, viewModel.password.get()!!))
                requireActivity().startActivity(MainActivity(requireContext()))
            else {
                email_etv.error = resources.getString(R.string.email_or_password_wrong)
                password_etv.error = resources.getString(R.string.email_or_password_wrong)
                button_sign_in.visibility = View.VISIBLE
                signin_progress_bar.visibility = View.GONE
                button_sign_in.isClickable = true
                create_account_tv.isClickable = true
            }
        }
    }

    private fun onCreateAccountTvClicked() {
        create_account_tv.isClickable = false
        button_sign_in.isClickable = false
        navController.navigate(
            SigninFragmentDirections.actionLoginToSignup(
                viewModel.email.get()!!,
                viewModel.password.get()!!
            )
        )
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        requireActivity().onBackPressedDispatcher.addCallback(this) {
            requireActivity().finishAndRemoveTask()
        }
    }


}