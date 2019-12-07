package com.example.myapplication.ui.match

import android.content.Context
import android.content.Intent
import android.os.Bundle
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.ui.BaseActivity
import kotlinx.android.synthetic.main.activity_match.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

@ExperimentalCoroutinesApi
class MatchActivity : BaseActivity() {

    private val viewModel: MatchViewModel by viewModelInstance()
    private val tournamentId by lazy { intent.extras!!.getLong(TOURNAMENT_TAG) }

    @FlowPreview
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_match)

        with(viewModel) {
            tournaments_recyclerview.adapter = adapter
            tournament.observe {
                getMatchesByTournament(it)
            }
            loadTournament(tournamentId)
        }

    }

    companion object {

        private const val TOURNAMENT_TAG = "TT"

        fun buildIntent(context: Context, tournamentEntity: TournamentEntity) =
            Intent(context, MatchActivity::class.java).apply {
                putExtra(TOURNAMENT_TAG, tournamentEntity.id)
            }

        operator fun invoke(context: Context, tournamentEntity: TournamentEntity) =
            buildIntent(context, tournamentEntity)

    }

}