package com.example.myapplication.ui.login

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.activity.addCallback
import androidx.appcompat.widget.AppCompatEditText
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentSigninBinding
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.MainActivity
import com.facebook.*
import com.facebook.login.LoginManager
import com.facebook.login.LoginResult
import kotlinx.android.synthetic.main.fragment_signin.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@ExperimentalCoroutinesApi
class SigninFragment : BaseFragment(), FacebookCallback<LoginResult> {

    private val args by navArgs<SigninFragmentArgs>()
    private val viewModel by viewModelInstance<SigninViewModel>()
    private val callbackManager by lazy { CallbackManager.Factory.create()!! }
    private val fbLoginManager by lazy { LoginManager.getInstance() }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        FragmentSigninBinding.inflate(inflater, container, false).also {
            it.viewModel = viewModel.apply {
                email.set(args.email)
                password.set(args.password)
            }
        }.root

    @FlowPreview
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        button_sign_in.setOnClickListener {
            onLoginButtonClicked()
        }
        create_account_textview.setOnClickListener {
            onCreateAccountTextViewClicked()
        }
        facebook_login_button.setOnClickListener {
            fbLoginManager.registerCallback(callbackManager, this)
            fbLoginManager.logIn(this, listOf("email", "public_profile"))
        }
    }

    @FlowPreview
    private fun onLoginButtonClicked() {
        var asErrored = false

        fun checkETV(etv: AppCompatEditText) {
            if (etv.text.isNullOrEmpty()) {
                etv.error = resources.getString(R.string.must_not_be_empty)
                asErrored = true
            }
        }

        checkETV(email_edit_textview)
        checkETV(password_edit_textview)

        if (!asErrored) {
            button_sign_in.isClickable = false
            create_account_textview.isClickable = false
            button_sign_in.visibility = View.INVISIBLE
            signin_progress_bar.visibility = View.VISIBLE

            try {
                viewModel.signinWithEmail(lifecycleScope) {
                    startActivity(MainActivity)
                }
            } catch (e: AuthException.AuthMalformedEmailException) {
                email_edit_textview.error = resources.getString(R.string.email_is_malformed)
            } catch (e: AuthException.AuthInvalidCredentialsException) {
                email_edit_textview.error = resources.getString(R.string.email_or_password_wrong)
                password_edit_textview.error = resources.getString(R.string.email_or_password_wrong)
            } finally {
                button_sign_in.visibility = View.VISIBLE
                signin_progress_bar.visibility = View.GONE
                button_sign_in.isClickable = true
                create_account_textview.isClickable = true
            }

        }
    }

    private fun onCreateAccountTextViewClicked() {
        create_account_textview.isClickable = false
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

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        callbackManager.onActivityResult(requestCode, resultCode, data)
    }

    @FlowPreview
    override fun onSuccess(result: LoginResult) {
        viewModel.signinWithFb(result.accessToken.token, lifecycleScope) {
            startActivity(MainActivity)
        }
    }

    override fun onCancel() {}

    override fun onError(error: FacebookException?) {}

}