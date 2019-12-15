package com.example.myapplication.ui.login

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.activity.addCallback
import androidx.appcompat.widget.AppCompatEditText
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentSigninBinding
import com.example.myapplication.datasource.FirebaseAuth
import com.example.myapplication.datasource.await
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
import com.google.firebase.auth.GoogleAuthProvider
import kotlinx.android.synthetic.main.fragment_signin.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance


@ExperimentalCoroutinesApi
class SigninFragment : BaseFragment(), FacebookCallback<LoginResult> {

    companion object {
        const val RC_SIGN_IN = 1234
    }

    private val args by navArgs<SigninFragmentArgs>()
    private val viewModel by viewModelInstance<SigninViewModel>()
    private val callbackManager by instance<FacebookCallbackManager>()
    private val fbLoginManager by instance<FacebookLoginManager>()
    private val googleAuthClient: GoogleSignInClient by instance(arg = this)
    private val fAuth by instance<FirebaseAuth>()

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
            showLoadingStuff()
            fbLoginManager.registerCallback(callbackManager, this)
            fbLoginManager.logIn(this, listOf("email", "public_profile"))
        }
        google_login_button.setOnClickListener {
            showLoadingStuff()
            startActivityForResult(googleAuthClient.signInIntent, RC_SIGN_IN)
        }
        email_edit_textview.resetLayoutErrorOnTextChanged(fragment_signin_email_layout)
        password_edit_textview.resetLayoutErrorOnTextChanged(fragment_signin_password_layout)
    }

    override fun onDestroy() {
        super.onDestroy()
        fbLoginManager.unregisterCallback(callbackManager)
    }

    private fun showLoadingStuff() {
        facebook_login_button.isClickable = false
        button_sign_in.isClickable = false
        create_account_textview.isClickable = false
        button_sign_in.visibility = View.INVISIBLE
        signin_progress_bar.visibility = View.VISIBLE
    }

    private fun hideLoadingStuff() {
        facebook_login_button.isClickable = true
        button_sign_in.visibility = View.VISIBLE
        signin_progress_bar.visibility = View.GONE
        button_sign_in.isClickable = true
        create_account_textview.isClickable = true
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
            showLoadingStuff()

            viewModel.signinWithEmail(lifecycleScope, {
                when (it) {
                    is AuthMalformedEmailException ->
                        fragment_signin_email_layout.error = resources.getString(R.string.email_is_malformed)
                    is AuthInvalidCredentialsException -> {
                        fragment_signin_email_layout.error = resources.getString(R.string.email_or_password_wrong)
                        fragment_signin_password_layout.error = resources.getString(R.string.email_or_password_wrong)
                    }
                    is AuthUserCollisionException ->
                        Snackbar.make(
                            email_edit_textview,
                            R.string.oauth_collision_message,
                            Snackbar.LENGTH_LONG
                        ).show()
                    else -> throw it
                }
                hideLoadingStuff()
            }) {
                startActivity(MainActivity)
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

    @FlowPreview
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        callbackManager.onActivityResult(requestCode, resultCode, data)
        if (requestCode == RC_SIGN_IN)
            lifecycleScope.launch {
                try {
                    val account = GoogleSignIn.getSignedInAccountFromIntent(data).await()
                    val signInMethods = fAuth.fetchSignInMethodsForEmail(account.email!!).await().signInMethods!!
                    if (signInMethods.isNotEmpty() && GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD !in signInMethods) {
                        Snackbar.make(
                            google_login_button,
                            R.string.oauth_collision_message,
                            Snackbar.LENGTH_LONG
                        ).show()
                        hideLoadingStuff()
                    } else
                        viewModel.signinWithGoogle(account.idToken!!, lifecycleScope) {
                            startActivity(MainActivity)
                        }
                } catch (e: Throwable) {
                    Log.d(TAG, e.message, e)
                    Snackbar.make(facebook_login_button, R.string.something_went_wrong, Snackbar.LENGTH_SHORT).show()
                    hideLoadingStuff()
                }
            }

    }

    @FlowPreview
    override fun onSuccess(result: LoginResult) {
        viewModel.signinWithFb(result.accessToken.token, lifecycleScope, {
            when (it) {
                is AuthUserCollisionException ->
                    Snackbar.make(email_edit_textview, R.string.oauth_collision_message, Snackbar.LENGTH_LONG).show()
                else -> throw it
            }
            hideLoadingStuff()
        }) {
            startActivity(MainActivity)
        }
    }

    override fun onCancel() {
        hideLoadingStuff()
    }

    override fun onError(error: FacebookException?) {
        Snackbar.make(facebook_login_button, R.string.something_went_wrong, Snackbar.LENGTH_SHORT).show()
        hideLoadingStuff()
    }

}