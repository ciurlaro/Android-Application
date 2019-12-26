package com.example.myapplication.ui.tournament

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.AdapterView
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.databinding.ActivityCreateTournamentBinding
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.IntentBuilder
import com.example.myapplication.ui.utils.buildGameChooserDialog
import kotlinx.android.synthetic.main.activity_create_tournament.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview


@FlowPreview
@ExperimentalCoroutinesApi
class CreateTournamentActivity : BaseActivity() {

    private val viewModel: CreateTournamentViewModel by viewModelInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        bindContentView<ActivityCreateTournamentBinding>(R.layout.activity_create_tournament) {
            viewModel = this@CreateTournamentActivity.viewModel
        }

        viewModel.selectedPlayersNumber.value = activity_players_spinner.selectedItem.toString().toInt()

        activity_players_spinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onNothingSelected(parent: AdapterView<*>?) {}
            override fun onItemSelected(parent: AdapterView<*>, view: View, position: Int, id: Long) {
                viewModel.selectedPlayersNumber.value = parent.getItemAtPosition(position).toString().toInt()
            }
        }

        with(viewModel) {
            selectedGame.observe {
                Glide.with(this@CreateTournamentActivity)
                    .load(it.icon)
                    .into(selected_game_image)
                games_selection_edit_textview.text = it.name
            }
            availableGames.observe { games ->
                activity_tournament_games_button.setOnClickListener {
                    buildGameChooserDialog(this@CreateTournamentActivity, games) {
                        selectedGame.value = it
                    }.show()
                }
            }
            loadGames()
        }

        activity_create_tournament_button.setOnClickListener {
            activity_create_tournament_button.isClickable = false
            if (checkCorrectness()) {
                viewModel.createTournament(lifecycleScope) {
                    startActivity(TournamentDetailActivity, it.id)
                }
            } else
                activity_create_tournament_button.isClickable = true
        }

    }

    private fun checkCorrectness(): Boolean {
        var isAllOk = true
        if (activity_item_title_text_view.text.isNullOrBlank()) {
            activity_item_title_text_view.error = resources.getString(R.string.empty_string)
            isAllOk = false
        }
        if (activity_create_tournament_description_text_view.text.isNullOrBlank()) {
            activity_create_tournament_description_text_view.error = resources.getString(R.string.empty_string)
            isAllOk = false
        }
        if (games_selection_edit_textview.text.isNullOrBlank()) {
            games_selection_edit_textview.error = resources.getString(R.string.select_a_game)
            isAllOk = false
        }
        return isAllOk
    }

    companion object : IntentBuilder<CreateTournamentActivity> {
        override fun buildIntent(context: Context) =
            Intent(context, CreateTournamentActivity::class.java)
    }

}
