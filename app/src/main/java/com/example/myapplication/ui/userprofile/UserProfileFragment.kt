package com.example.myapplication.ui.userprofile

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.View.GONE
import android.view.View.VISIBLE
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import kotlinx.android.synthetic.main.fragment_user.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch


@ExperimentalCoroutinesApi
class UserProfileFragment : BaseFragment() {

    private val viewModel: UserProfileViewModel by viewModelInstance()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_user, container, false)!!


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
            lifecycleScope.launch { viewModel.signout() }
        }

        button_history.setOnClickListener {
            lifecycleScope.launch { viewModel.getHistory(requireContext()) }
        }
    }
}