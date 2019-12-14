package com.example.myapplication.ui.userprofile

import android.app.AlertDialog
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.View.*
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.myapplication.R
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.MainActivity
import com.example.myapplication.ui.OnboardingActivity
import com.example.myapplication.ui.history.HistoryActivity
import com.facebook.CallbackManager
import com.facebook.FacebookCallback
import com.facebook.FacebookException
import com.facebook.login.LoginManager
import com.facebook.login.LoginResult
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.fragment_user.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch
import java.security.AuthProvider


@ExperimentalCoroutinesApi
class UserProfileFragment : BaseFragment(), FacebookCallback<LoginResult> {

    private val viewModel: UserProfileViewModel by viewModelInstance()
    private val callbackManager by lazy { CallbackManager.Factory.create()!! }
    private val fbLoginManager by lazy { LoginManager.getInstance() }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_user, container, false)!!

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        with(viewModel) {
            model.observe { (user, isVerified, providersLinked) ->
                update_user_is_subscribed.visibility = if (user.isSubscriber) VISIBLE else INVISIBLE
                user.image?.let {
                    Glide.with(requireContext())
                        .load(it)
                        .apply(RequestOptions.circleCropTransform())
                        .into(user_image)
                }
                user_nickname.text = user.nickname
                user_mail.text = user.email
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
                }
                email_btn.setOnClickListener {
                    if (AuthProviders.EMAIL_PASSWORD in providersLinked)
                        Snackbar.make(it, R.string.provider_already_linked, Snackbar.LENGTH_SHORT).show()
                    else
                        CreatePasswordDialog {
                            viewModel.linkEmailPasswordAccount(it, lifecycleScope) {
                                Snackbar.make(email_btn, R.string.email_connected, Snackbar.LENGTH_SHORT).show()
                            }
                        }.show(fragmentManager!!, CreatePasswordDialog::class.simpleName!!)

                }
                button_history.setOnClickListener {
                    startActivity(HistoryActivity, user.id)
                }
            }
            loadUserInfo()
        }

        button_logout.setOnClickListener {
            viewModel.signOut(lifecycleScope) {
                startActivity(OnboardingActivity)
            }
        }
    }

    override fun onSuccess(result: LoginResult) {
        viewModel.linkFacebookAccount(result.accessToken.token, lifecycleScope) {
            Snackbar.make(facebook_btn, resources.getString(R.string.facebook_connected), Snackbar.LENGTH_SHORT).show()
        }
    }

    override fun onCancel() {}

    override fun onError(error: FacebookException?) {}
}