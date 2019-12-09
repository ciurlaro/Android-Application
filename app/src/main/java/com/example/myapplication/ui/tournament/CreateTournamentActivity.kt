package com.example.myapplication.ui.tournament

import android.content.Context
import android.content.Intent
import android.os.Bundle
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.databinding.ActivityCreateTournamentBinding
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.MainActivity
import kotlinx.android.synthetic.main.activity_create_tournament.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

@ExperimentalCoroutinesApi
@FlowPreview
class CreateTournamentActivity : BaseActivity() {

    private val viewModel: CreateTournamentViewModel by viewModelInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_tournament)

        games_selection_etv.setOnClickListener {
            SelectGameDialog {
                viewModel.selectedGame.value = it
            }.show(supportFragmentManager, "TEST")
        }

        with(viewModel) {
            selectedGame.observe {
                Glide.with(this@CreateTournamentActivity)
                    .load(it.icon)
                    .into(selected_game_image)
            }
        }
    }

    override fun onBackPressed() {
        super.onBackPressed()
        startActivity(MainActivity(this@CreateTournamentActivity))
    }


    companion object {
        private fun buildIntent(context: Context) =
            Intent(context, CreateTournamentActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
            }

        operator fun invoke(context: Context) =
            buildIntent(context)
    }

}