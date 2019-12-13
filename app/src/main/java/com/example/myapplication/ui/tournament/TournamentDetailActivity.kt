package com.example.myapplication.ui.tournament

import android.content.Context
import android.content.Intent
import android.os.Bundle
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.IntentBuilderWithArguments
import com.example.myapplication.ui.items.SimpleUserFlexibleItem
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.activity_tournament_detail.*
import kotlinx.coroutines.FlowPreview

class TournamentDetailActivity : BaseActivity() {

    private val tournamentId by lazy { intent.extras!!.getLong(TOURNAMENT_ID) }
    private val viewModel by viewModelInstance<TournamentDetailViewModel>()
    private val adapter by lazy { FlexibleAdapter<SimpleUserFlexibleItem>(emptyList()) }

    @FlowPreview
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tournament_detail)
        users_recyclerview.adapter = adapter

        with(viewModel) {
            model.observe { (tournament, users) ->
                adapter.addItems(0, users.map { SimpleUserFlexibleItem(it) })
                adapter.mItemClickListener = FlexibleAdapter.OnItemClickListener { _, position ->
                    val userId = users[position]
//                     TODO open user details
                    true
                }
                players_count_textview.text =
                    resources.getString(R.string.playes_in_tournament_numbers, users.size, tournament.playersNumber)
                Glide.with(this@TournamentDetailActivity)
                    .load(tournament.game.icon)
                    .into(game_icon)
                tournament_title.text = tournament.title
                tournament_description.text = tournament.tournamentDescription
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