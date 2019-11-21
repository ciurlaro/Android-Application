package com.example.myapplication.ui.signup

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.activity.addCallback
import androidx.annotation.StringRes
import androidx.appcompat.widget.AppCompatEditText
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentSignupBinding
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.usecases.user.creation.CreateAccountWithCompleteInformation
import kotlinx.android.synthetic.main.fragment_signup.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance

@ExperimentalCoroutinesApi
class SignupFragment : BaseFragment() {

    private val args by navArgs<SignupFragmentArgs>()
    private val viewModel by viewModelInstance<SignupViewModel>()
    private val createAccountWithCompleteInformationUseCase by instance<CreateAccountWithCompleteInformation>()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSignupBinding.inflate(inflater, container, false).also {
            it.viewModel = viewModel.apply {
                email.set(args.email)
                password.set(args.password)
            }
        }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        button_sign_up.setOnClickListener{
            lifecycleScope.launch { onSignupButtonClicked() }
        }
        already_have_account_tv.setOnClickListener {
            onSigninTvClicked()
        }
    }

    private suspend fun onSignupButtonClicked() {
        var hasErrored = false

        fun checkETVBlankError(etv: AppCompatEditText) {
            if (etv.text.isNullOrBlank()) {
                etv.error = resources.getString(R.string.must_not_be_empty)
                hasErrored = true
            }
        }

        fun checkEqualsETV(tv1: AppCompatEditText, tv2: AppCompatEditText, @StringRes error: Int) {
            if (tv1.text.toString() != tv2.text.toString()) {
                tv2.error = resources.getString(error)
                hasErrored = true
            }
        }

        checkETVBlankError(email_etv)
        checkETVBlankError(confirm_email_etv)
        checkETVBlankError(password_etv)
        checkETVBlankError(confirm_email_etv)
        checkETVBlankError(nickname_tv)

        checkEqualsETV(email_etv, confirm_email_etv, R.string.email_must_match)
        checkEqualsETV(password_etv, confirm_password_etv, R.string.password_must_match)

        if (!hasErrored) {
            button_sign_up.isClickable = false
            already_have_account_tv.isClickable = false
            val isSuccessful = try {
                createAccountWithCompleteInformationUseCase.buildAction(
                    viewModel.email.get()!!,
                    viewModel.password.get()!!,
                    viewModel.nickname.get()!!
                )
            } catch (e: Throwable) {

            }
        }

    }

    private fun onSigninTvClicked() {
        already_have_account_tv.isClickable = false
        button_sign_up.isClickable = false
        navController.navigate(
            SignupFragmentDirections.actionSignupToSignin(
                viewModel.email.get()!!,
                viewModel.password.get()!!
            )
        )
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        requireActivity().onBackPressedDispatcher.addCallback(this) {
            onSigninTvClicked()
        }
    }

}