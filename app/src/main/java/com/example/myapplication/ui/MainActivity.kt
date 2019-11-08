package com.example.myapplication.ui

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.navigation.ui.setupWithNavController
import com.example.myapplication.R
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
class MainActivity : BaseActivity(R.id.nav_host_fragment) {

    companion object {

        fun buildIntent(context: Context) =
            Intent(context, MainActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
            }

        operator fun invoke(context: Context) =
            buildIntent(context)

    }

    @ExperimentalCoroutinesApi
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!authManager.isLoggedIn())
            startActivity(OnboardingActivity(this))
        else{
            setContentView(R.layout.activity_main)
            bottom_nav_view.setupWithNavController(navController)
        }
    }

    override fun onResume() {
        super.onResume()
        authManager.setOnLogoutCallback {
            startActivity(OnboardingActivity(this))
        }
    }

}
