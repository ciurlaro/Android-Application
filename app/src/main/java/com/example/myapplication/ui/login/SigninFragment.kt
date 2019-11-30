package com.example.myapplication.ui.login

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.inputmethod.EditorInfo
import androidx.activity.addCallback
import androidx.appcompat.widget.AppCompatEditText
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentSigninBinding
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.MainActivity
import com.example.myapplication.usecases.user.login.SigninUserUseCase
import kotlinx.android.synthetic.main.fragment_signin.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance

@ExperimentalCoroutinesApi
class SigninFragment : BaseFragment() {

    private val args by navArgs<SigninFragmentArgs>()
    private val viewModel by viewModelInstance<SigninViewModel>()
    private val signinUserUseCase by instance<SigninUserUseCase>()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSigninBinding.inflate(inflater, container, false).also {
            it.viewModel = viewModel.apply {
                email.set(args.email)
                password.set(args.password)
            }
        }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        button_sign_in.setOnClickListener {
            lifecycleScope.launch(Dispatchers.Main) {
                onLoginButtonClicked()
            }
        }
        create_account_tv.setOnClickListener {
            onCreateAccountTvClicked()
        }

        password_etv.setOnEditorActionListener { _, action_id, _ ->
            if (action_id == EditorInfo.IME_ACTION_DONE) {
                lifecycleScope.launch(Dispatchers.Main) {
                    onLoginButtonClicked()
                }
            }
            true
        }
    }

    private suspend fun onLoginButtonClicked() {
        var asErrored = false

        fun checkETV(etv: AppCompatEditText) {
            if (etv.text.isNullOrEmpty()) {
                etv.error = resources.getString(R.string.must_not_be_empty)
                asErrored = true
            }
        }

        checkETV(email_etv)
        checkETV(password_etv)

        if (!asErrored) {
            button_sign_in.isClickable = false
            create_account_tv.isClickable = false
            button_sign_in.visibility = View.INVISIBLE
            signin_progress_bar.visibility = View.VISIBLE

            try {
                signinUserUseCase.buildAction(viewModel.email.get()!!, viewModel.password.get()!!)
                requireActivity().startActivity(MainActivity(requireContext()))
            } catch (e: AuthException.AuthMalformedEmailException) {
                email_etv.error = resources.getString(R.string.email_is_malformed)
            } catch (e: AuthException.AuthInvalidCredentialsException) {
                email_etv.error = resources.getString(R.string.email_or_password_wrong)
                password_etv.error = resources.getString(R.string.email_or_password_wrong)
            } finally {
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
            SigninFragmentDirections.actionSigninToSignup(
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