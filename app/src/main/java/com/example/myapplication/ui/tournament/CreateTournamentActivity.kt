package com.example.myapplication.ui.tournament

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import com.example.myapplication.R
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

        activity_game_spinner.adapter = viewModel.adapter

        activity_create_tournament_button.setOnClickListener {
            Log.d("e", "LOOOOOL")
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