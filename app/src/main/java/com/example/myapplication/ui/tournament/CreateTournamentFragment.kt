package com.example.myapplication.ui.tournament

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import kotlinx.android.synthetic.main.fragment_create_tournament.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
class CreateTournamentFragment : BaseFragment() {

    private val viewModel: TournamentViewModel by viewModelInstance()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_create_tournament, container, false)!!


    @SuppressLint("InflateParams")
    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        dialog_create_tournament_button.setOnClickListener {
            Log.d("e", "LOOOOOOOL")
        }
    }

}