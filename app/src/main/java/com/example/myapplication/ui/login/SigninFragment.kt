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
import com.example.myapplication.datasource.await
import com.example.myapplication.exceptions.AuthException
import com.example.myapplication.exceptions.AuthException.*
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.MainActivity
import com.example.myapplication.ui.utils.FacebookCallbackManager
import com.example.myapplication.ui.utils.FacebookLoginManager
import com.example.myapplication.ui.utils.resetLayoutErrorOnTextChanged
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginResult
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.fragment_signin.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance


@ExperimentalCoroutinesApi
@FlowPreview
class SigninFragment : BaseFragment(), FacebookCallback<LoginResult> {

    companion object {
        const val RC_SIGN_IN = 1234
    }

    private val args by navArgs<SigninFragmentArgs>()
    private val viewModel by viewModelInstance<SigninViewModel>()
    private val callbackManager by instance<FacebookCallbackManager>()
    private val fbLoginManager by instance<FacebookLoginManager>()
    private val googleAuthClient: GoogleSignInClient by instance(arg = this)

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
            onLoginButtonClicked()
        }
        create_account_textview.setOnClickListener {
            onCreateAccountTextViewClicked()
        }
        facebook_login_button.setOnClickListener {
            showLoading()
            fbLoginManager.registerCallback(callbackManager, this)
            fbLoginManager.logIn(this, listOf("email", "public_profile"))
        }
        google_login_button.setOnClickListener {
            showLoading()
            startActivityForResult(googleAuthClient.signInIntent, RC_SIGN_IN)
        }

        email_edit_textview.resetLayoutErrorOnTextChanged(fragment_signin_email_layout)
        password_edit_textview.resetLayoutErrorOnTextChanged(fragment_signin_password_layout)

        with(viewModel) {
            isLoginSuccessful.observe {
                if (it) startActivity(MainActivity)
            }
            loginError.observe { showError(it) }
        }

    }

    override fun onDestroy() {
        super.onDestroy()
        fbLoginManager.unregisterCallback(callbackManager)
    }

    private fun showLoading() {
        facebook_login_button.isClickable = false
        button_sign_in.isClickable = false
        create_account_textview.isClickable = false
        button_sign_in.visibility = View.INVISIBLE
        signin_progress_bar.visibility = View.VISIBLE
    }

    private fun hideLoading() {
        facebook_login_button.isClickable = true
        button_sign_in.visibility = View.VISIBLE
        signin_progress_bar.visibility = View.GONE
        button_sign_in.isClickable = true
        create_account_textview.isClickable = true
    }


    private fun onLoginButtonClicked() {
        var asErrored = false

        fun checkEditTextViews(etv: AppCompatEditText) {
            if (etv.text.isNullOrEmpty()) {
                etv.error = resources.getString(R.string.must_not_be_empty)
                asErrored = true
            }
        }

        checkEditTextViews(email_edit_textview)
        checkEditTextViews(password_edit_textview)

        if (!asErrored)
            showLoading().also { viewModel.signinWithEmail() }

    }

    private fun showError(error: AuthException) {
        when (error) {
            is AuthMalformedEmailException ->
                fragment_signin_email_layout.error = resources.getString(R.string.email_is_malformed)
            is AuthInvalidCredentialsException, is AuthInvalidUserException -> {
                fragment_signin_email_layout.error = " "
                fragment_signin_password_layout.error = resources.getString(R.string.email_or_password_wrong)
                Snackbar.make(
                    email_edit_textview,
                    R.string.email_or_password_wrong,
                    Snackbar.LENGTH_LONG
                ).show()
            }
            is AuthUserCollisionException ->
                Snackbar.make(
                    email_edit_textview,
                    R.string.oauth_collision_message,
                    Snackbar.LENGTH_LONG
                ).show()
            else -> throw error
        }
        hideLoading()
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
        if (requestCode == RC_SIGN_IN)
            lifecycleScope.launch {
                val account = GoogleSignIn.getSignedInAccountFromIntent(data).await()
                viewModel.signinWithGoogle(account.idToken!!, account.email!!)
            }
    }


    override fun onSuccess(result: LoginResult) {
        viewModel.signinWithFb(result.accessToken.token)
    }

    override fun onCancel() {
        hideLoading()
    }

    override fun onError(error: FacebookException?) {
        Snackbar.make(facebook_login_button, R.string.something_went_wrong, Snackbar.LENGTH_SHORT).show()
        hideLoading()
    }

}