package com.example.myapplication.ui.tournament

import android.content.Context
import android.content.DialogInterface
import android.content.Intent
import android.os.Bundle
import android.view.View.VISIBLE
import android.view.ViewGroup
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.CenterCrop
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.bumptech.glide.request.RequestOptions
import com.example.myapplication.R
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.IntentBuilderWithArguments
import com.example.myapplication.ui.history.HistoryActivity
import com.example.myapplication.ui.items.SimpleUserFlexibleItem
import com.example.myapplication.ui.utils.buildRegistrationDialog
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import com.google.android.material.snackbar.Snackbar
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.activity_tournament_detail.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

@FlowPreview
class TournamentDetailActivity : BaseActivity() {

    private val tournamentId by lazy { intent.extras!!.getLong(TOURNAMENT_ID) }
    private val viewModel by viewModelInstance<TournamentDetailViewModel>()

    @ExperimentalCoroutinesApi
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tournament_detail)

        with(viewModel) {
            model.observe { (tournament, _) ->
                players_count_textview.text =
                    resources.getString(R.string.players_with_number, tournament.playersNumber)
                Glide.with(this@TournamentDetailActivity)
                    .load(tournament.game.icon)
                    .into(game_icon)
                Glide.with(this@TournamentDetailActivity)
                    .load(tournament.game.image)
                    .apply(RequestOptions().apply {
                        transform(CenterCrop(), RoundedCorners(16))
                    })
                    .into(game_image)
                tournament_title.text = tournament.title
                tournament_description.text = tournament.tournamentDescription
                left_divider.visibility = VISIBLE
                right_divider.visibility = VISIBLE

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
