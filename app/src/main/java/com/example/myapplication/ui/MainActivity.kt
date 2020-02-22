package com.example.myapplication.ui

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.view.View.GONE
import android.view.View.VISIBLE
import androidx.lifecycle.lifecycleScope
import androidx.navigation.ui.setupWithNavController
import com.example.myapplication.R
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.ui.tournament.CreateTournamentActivity
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import org.kodein.di.erased.instance


@SuppressLint("Registered")
@FlowPreview
@ExperimentalCoroutinesApi
class MainActivity : BaseFragmentedActivity(R.id.nav_host_fragment) {

    private val repo by instance<ArenaTournamentRepository>()

    init {
        lifecycleScope.launchWhenCreated {
            if (repo.getCurrentUser() != null) {
                setContentView(R.layout.activity_main)
                bottom_nav_view.setupWithNavController(navController)
            } else startActivity(OnboardingActivity)
        }
    }

    override fun onBackPressed() =
        finish()

    companion object : IntentBuilder<MainActivity> {

        override fun buildIntent(context: Context) =
            Intent(context, MainActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
            }
    }

}
