package com.example.myapplication.ui.signup

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.View.INVISIBLE
import android.view.View.VISIBLE
import android.view.ViewGroup
import androidx.activity.addCallback
import androidx.annotation.StringRes
import androidx.appcompat.widget.AppCompatEditText
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentSignupBinding
import com.example.myapplication.exceptions.AuthException.*
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.MainActivity
import kotlinx.android.synthetic.main.fragment_signup.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@FlowPreview
@ExperimentalCoroutinesApi
class SignupFragment : BaseFragment() {

    private val args by navArgs<SignupFragmentArgs>()
    private val viewModel by viewModelInstance<SignupViewModel>()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSignupBinding.inflate(inflater, container, false).also {
            it.viewModel = viewModel.apply {
                email.set(args.email)
                password.set(args.password)
            }
        }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        button_sign_up.setOnClickListener {
            lifecycleScope.launch(Dispatchers.Main) {
                onSignupButtonClicked()
            }
        }
        already_have_account_textview.setOnClickListener {
            onSigninTextviewClicked()
        }
    }

    private fun onSignupButtonClicked() {
        var hasErrored = false

        fun checkEditTextviewBlankError(etv: AppCompatEditText) {
            if (etv.text.isNullOrBlank()) {
                etv.error = resources.getString(R.string.must_not_be_empty)
                hasErrored = true
            }
        }

        fun checkEqualsEditTextviews(tv1: AppCompatEditText, tv2: AppCompatEditText, @StringRes error: Int) {
            if (tv1.text.toString() != tv2.text.toString()) {
                tv2.error = resources.getString(error)
                hasErrored = true
            }
        }

        checkEditTextviewBlankError(email_edit_textview)
        checkEditTextviewBlankError(confirm_email_edit_textview)
        checkEditTextviewBlankError(password_edit_textview)
        checkEditTextviewBlankError(confirm_email_edit_textview)
        checkEditTextviewBlankError(nickname_textview)

        checkEqualsEditTextviews(email_edit_textview, confirm_email_edit_textview, R.string.email_must_match)
        checkEqualsEditTextviews(password_edit_textview, confirm_password_edit_textview, R.string.password_must_match)

        if (!hasErrored) {

            button_sign_up.isClickable = false
            already_have_account_textview.isClickable = false
            button_sign_up.visibility = INVISIBLE
            signup_progress_bar.visibility = VISIBLE

            viewModel.createAccountWithEmailAndPassword(lifecycleScope, {
                when (it) {
                    is AuthUserCollisionException ->
                        email_edit_textview.error = resources.getString(R.string.email_already_exists)
                    is AuthWeakPasswordException ->
                        password_edit_textview.error = resources.getString(R.string.weak_password_exception)
                    is AuthMalformedEmailException ->
                        email_edit_textview.error = resources.getString(R.string.email_is_malformed)
                }
                button_sign_up.isClickable = true
                already_have_account_textview.isClickable = true
                button_sign_up.visibility = VISIBLE
                signup_progress_bar.visibility = INVISIBLE
            }) {
                startActivity(MainActivity)
            }
        }
    }

    private fun onSigninTextviewClicked() {
        already_have_account_textview.isClickable = false
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
            onSigninTextviewClicked()
        }
    }

}