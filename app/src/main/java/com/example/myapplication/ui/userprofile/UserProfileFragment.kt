package com.example.myapplication.ui.userprofile

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.View.*
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.myapplication.R
import com.example.myapplication.databinding.FragmentUserBinding
import com.example.myapplication.datasource.await
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.OnboardingActivity
import com.example.myapplication.ui.history.HistoryActivity
import com.example.myapplication.ui.login.SigninFragment
import com.example.myapplication.ui.utils.FacebookCallbackManager
import com.example.myapplication.ui.utils.FacebookLoginManager
import com.example.myapplication.ui.utils.resetLayoutErrorOnTextChanged
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginResult
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.fragment_user.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance


@ExperimentalCoroutinesApi
class UserProfileFragment : BaseFragment(), FacebookCallback<LoginResult> {

    companion object {
        const val RC_SIGN_IN = 1234
    }

    private val viewModel: UserProfileViewModel by viewModelInstance()
    private val callbackManager by instance<FacebookCallbackManager>()
    private val fbLoginManager by instance<FacebookLoginManager>()
    private val googleAuthClient: GoogleSignInClient by instance(arg = this)

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = FragmentUserBinding.inflate(inflater, container, false).also {
        it.viewModel = viewModel
    }.root

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        hideCreatePasswordStuff()
        with(viewModel) {
            model.observe { (user, _, providersLinked) ->
                update_user_is_subscribed.visibility = if (user.isSubscriber) VISIBLE else INVISIBLE
                user.image?.let {
                    Glide.with(requireContext())
                        .load(it)
                        .apply(RequestOptions.circleCropTransform())
                        .into(user_image)
                }
                user_nickname.text = user.nickname
                user_mail.text = user.email

//                edit_profile_fab.setOnClickListener {
//                    ImagePicker.with(this)
//                        .crop()	    			//Crop image(Optional), Check Customization for more option
//                        .compress(1024)			//Final image size will be less than 1 MB(Optional)
//                        .maxResultSize(1080, 1080)	//Final image resolution will be less than 1080 x 1080(Optional)
//                        .start()
//                }

                facebook_btn.setOnClickListener {
                    if (AuthProviders.FACEBOOK in providersLinked)
                        Snackbar.make(it, R.string.provider_already_linked, Snackbar.LENGTH_SHORT).show()
                    else {
                        fbLoginManager.registerCallback(callbackManager, this@UserProfileFragment)
                        fbLoginManager.logIn(this@UserProfileFragment, listOf("email", "public_profile"))
                    }

                }
                google_btn.setOnClickListener {
                    if (AuthProviders.GOOGLE in providersLinked)
                        Snackbar.make(it, R.string.provider_already_linked, Snackbar.LENGTH_SHORT).show()
                    else
                        startActivityForResult(googleAuthClient.signInIntent, RC_SIGN_IN)
                }
                email_btn.setOnClickListener {
                    if (AuthProviders.EMAIL_PASSWORD in providersLinked)
                        Snackbar.make(it, R.string.provider_already_linked, Snackbar.LENGTH_SHORT).show()
                    else
                        showCreatePasswordStuff()
                }
                button_history.setOnClickListener {
                    startActivity(HistoryActivity, user.id)
                }
            }
            loadUserInfo()
        }

        fragment_user_password_etv.resetLayoutErrorOnTextChanged(fragment_user_password_etv_layout)
        fragment_user_confirm_password_etv.resetLayoutErrorOnTextChanged(fragment_user_confirm_password_etv_layout)

        button_logout.setOnClickListener {
            viewModel.signOut(lifecycleScope) {
                startActivity(OnboardingActivity)
            }
        }

        cancel_password_button.setOnClickListener {
            hideCreatePasswordStuff()
        }

        confirm_password_button.setOnClickListener {
            if (!checkPasswords())
                viewModel.linkEmailPasswordAccount(lifecycleScope) {
                    Snackbar.make(confirm_password_button, R.string.email_connected, Snackbar.LENGTH_SHORT).show()
                    hideCreatePasswordStuff()
                    viewModel.loadUserInfo()
                }
        }
    }

    private fun checkPasswords(): Boolean {
        var hasErrored = false
        if (fragment_user_password_etv.text.isNullOrEmpty()) {
            fragment_user_password_etv_layout.error = resources.getString(R.string.must_not_be_empty)
            hasErrored = true
        }
        if (fragment_user_confirm_password_etv.text.isNullOrEmpty()) {
            fragment_user_confirm_password_etv_layout.error = resources.getString(R.string.must_not_be_empty)
            hasErrored = true
        }
        if (fragment_user_password_etv.text.toString() != fragment_user_confirm_password_etv.text.toString()) {
            hasErrored = true
            fragment_user_confirm_password_etv_layout.error = resources.getString(R.string.password_must_match)
        }
        return hasErrored
    }

    private fun showCreatePasswordStuff() {
        fragment_user_password_etv_layout.visibility = VISIBLE
        fragment_user_confirm_password_etv_layout.visibility = VISIBLE
        confirm_password_button.visibility = VISIBLE
        cancel_password_button.visibility = VISIBLE
    }

    private fun hideCreatePasswordStuff() {
        fragment_user_password_etv_layout.visibility = GONE
        fragment_user_confirm_password_etv_layout.visibility = GONE
        confirm_password_button.visibility = GONE
        cancel_password_button.visibility = GONE
    }

    override fun onSuccess(result: LoginResult) {
        viewModel.linkFacebookAccount(result.accessToken.token, lifecycleScope) {
            Snackbar.make(facebook_btn, resources.getString(R.string.facebook_connected), Snackbar.LENGTH_SHORT).show()
            viewModel.loadUserInfo()
        }
    }

    override fun onCancel() {}

    override fun onError(error: FacebookException?) {
        Snackbar.make(facebook_btn, R.string.something_went_wrong, Snackbar.LENGTH_SHORT).show()
    }

    @FlowPreview
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        callbackManager.onActivityResult(requestCode, resultCode, data)
        if (requestCode == SigninFragment.RC_SIGN_IN)
            lifecycleScope.launch {
                try {
                    val token = GoogleSignIn.getSignedInAccountFromIntent(data).await().idToken!!
                    viewModel.linkGoogleAccount(token, lifecycleScope) {
                        Snackbar.make(
                            facebook_btn,
                            resources.getString(R.string.google_connected),
                            Snackbar.LENGTH_SHORT
                        ).show()
                        viewModel.loadUserInfo()
                    }
                } catch (e: Throwable) {
                    Log.d(TAG, e.message, e)
                    Snackbar.make(google_btn, R.string.something_went_wrong, Snackbar.LENGTH_SHORT).show()
                }
            }
    }
}