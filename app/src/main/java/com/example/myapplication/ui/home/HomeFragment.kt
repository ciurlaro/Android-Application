package com.example.myapplication.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.adapters.MatchesAdapter
import kotlinx.android.synthetic.main.fragment_home.*

class HomeFragment : BaseFragment() {

    private val viewModel: HomeViewModel by viewModelInstance()
    private val adapter = MatchesAdapter()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_home, container, false)!!

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        matches_rv.adapter = adapter

        viewModel.text.observe {
            adapter.data = it
        }

        viewModel.getGamesByMode()
        viewModel.getGamesContainingName()

        viewModel.getAllAvailableMatches()
        viewModel.getMatchesByUser()
        viewModel.getMatchesByTournament()

        viewModel.getRegistrationsByMatch()
        viewModel.getRegistrationByTournament()
        viewModel.getRegistrationsByUser()

        viewModel.getTournamentsByAdmin()
        viewModel.getShowcaseTournaments()
        viewModel.getTournamentsByGame()
        viewModel.getTournamentsByMode()
        viewModel.getTournamentsContainingTitle()

        viewModel.getUserInformation()
    }

}