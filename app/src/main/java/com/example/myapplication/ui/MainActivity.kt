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
import kotlinx.coroutines.FlowPreview
import org.kodein.di.erased.instance


@FlowPreview
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
//                            FARE 3 BOTTONI
//                            MaterialAlertDialogBuilder(context)
//                                .setView(R.layout.activity_create_tournament)
//                                .setPositiveButton("Create tournament") {}
//                                .show()
                            startActivity(CreateTournamentActivity)
                        }
                    }
                else new_tournament_button.visibility = GONE
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
