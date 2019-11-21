package com.example.myapplication.ui

import android.content.Context
import android.content.Intent
import android.os.Bundle
import kotlinx.coroutines.ExperimentalCoroutinesApi
import com.example.myapplication.R

@ExperimentalCoroutinesApi
class OnboardingActivity : BaseActivity(R.id.nav_host_onboarding_fragment) {

    companion object {

        private fun buildIntent(context: Context) =
            Intent(context, OnboardingActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
            }

        operator fun invoke(context: Context) =
            buildIntent(context)

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_onboarding)
    }

}