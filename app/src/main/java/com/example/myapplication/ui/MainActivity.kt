package com.example.myapplication.ui

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
import org.kodein.di.erased.instance


@ExperimentalCoroutinesApi
class MainActivity : BaseFragmentedActivity(R.id.nav_host_fragment) {

    private val repo by instance<ArenaTournamentRepository>()


    init {
        lifecycleScope.launchWhenCreated {
            if (repo.getCurrentUser() != null) {
                setContentView(R.layout.activity_main)
                bottom_nav_view.setupWithNavController(navController)
                if (!repo.isCurrentUserSubscriber())
                    with(new_tournament_button) {
                        visibility = VISIBLE
                        setOnClickListener {
                            startActivity(CreateTournamentActivity(this@MainActivity))
                        }
                    }
                else new_tournament_button.visibility = GONE
            } else startActivity(OnboardingActivity(this@MainActivity))
        }
    }

    override fun onBackPressed() {
        super.onBackPressed().apply { finish() }
    }

    companion object {

        private fun buildIntent(context: Context) =
            Intent(context, MainActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
            }

        operator fun invoke(context: Context) =
            buildIntent(context)
    }

}
