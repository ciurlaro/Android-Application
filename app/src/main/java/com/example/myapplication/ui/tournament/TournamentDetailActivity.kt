package com.example.myapplication.ui.tournament

import android.content.Context
import android.content.DialogInterface
import android.content.Intent
import android.os.Bundle
import android.view.View.VISIBLE
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.IntentBuilderWithArguments
import com.example.myapplication.ui.history.HistoryActivity
import com.example.myapplication.ui.items.SimpleUserFlexibleItem
import com.example.myapplication.ui.utils.buildRegistrationDialog
import com.google.android.material.snackbar.Snackbar
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.activity_tournament_detail.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class TournamentDetailActivity : BaseActivity() {

    private val tournamentId by lazy { intent.extras!!.getLong(TOURNAMENT_ID) }
    private val viewModel by viewModelInstance<TournamentDetailViewModel>()
    private val adapter by lazy { FlexibleAdapter<SimpleUserFlexibleItem>(emptyList()) }

    @ExperimentalCoroutinesApi
    @FlowPreview
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tournament_detail)
        users_recyclerview.adapter = adapter
        users_recyclerview.isNestedScrollingEnabled = true

        with(viewModel) {
            model.observe { (tournament, users, currentUser, isUserRegistered) ->
                adapter.addItems(0, users.map { SimpleUserFlexibleItem(it) { startActivity(HistoryActivity, it.id) } })
                players_count_textview.text =
                    resources.getString(R.string.players_in_tournament_numbers, users.size, tournament.playersNumber)
                Glide.with(this@TournamentDetailActivity)
                    .load(tournament.game.icon)
                    .into(game_icon)
                tournament_title.text = tournament.title
                tournament_description.text = tournament.tournamentDescription

                activity_register_now_button.visibility = VISIBLE
                activity_register_now_button.setOnClickListener {
                    if (isUserRegistered) {
                        Snackbar.make(it, R.string.already_registered_user, Snackbar.LENGTH_SHORT).show()
                    } else {
                        buildRegistrationDialog(this@TournamentDetailActivity,
                            DialogInterface.OnClickListener { _, _ ->
                                tournament.registrationByUser(currentUser)
                                activity_register_now_button.isEnabled = false
                                Snackbar.make(it, R.string.successfully_registration, Snackbar.LENGTH_SHORT).show()
                            }).show()
                    }
                }

            }
            loadTournament(tournamentId)
        }
    }

    companion object : IntentBuilderWithArguments<TournamentDetailActivity, Long> {

        private const val TOURNAMENT_ID = "TI"

        override fun buildIntent(context: Context, data: Long) =
            Intent(context, TournamentDetailActivity::class.java).apply {
                putExtra(TOURNAMENT_ID, data)
            }

    }
}