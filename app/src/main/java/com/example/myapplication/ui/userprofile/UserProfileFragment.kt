package com.example.myapplication.ui.userprofile

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.OnboardingActivity
import com.example.myapplication.usecases.user.logout.SignoutUserUseCase
import kotlinx.android.synthetic.main.fragment_user.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance


@ExperimentalCoroutinesApi
class UserProfileFragment : BaseFragment() {

    private val viewModel: UserProfileViewModel by viewModelInstance()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_user, container, false)!!

    @SuppressLint("InflateParams", "ResourceType")
    @ExperimentalCoroutinesApi

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        viewModel.loadUserInfo()

        with(viewModel) {
            user.observe {
                update_user_is_subscribed.visibility = if (it.isSubscriber) VISIBLE else GONE

                Glide.with(context!!)
                    .load(it.image)
                    .apply(RequestOptions.circleCropTransform())
                    .into(history_user_image)
                user_nickname.text = it.nickname
                user_mail.text = it.email
            }

            isUserVerified.observe {
                update_user_is_verified.visibility = if (it) VISIBLE else GONE
            }
        }

        button_logout.setOnClickListener {
            viewModel.signOut(lifecycleScope) {
                startActivity(OnboardingActivity)
            }
        }

        button_history.setOnClickListener {
            lifecycleScope.launch { viewModel.getHistory(requireContext()) }
        }
    }
}