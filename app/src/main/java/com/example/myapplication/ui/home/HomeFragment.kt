package com.example.myapplication.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import kotlinx.android.synthetic.main.fragment_home.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

class HomeFragment : BaseFragment() {

    private val viewModel: HomeViewModel by viewModelInstance()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_home, container, false)!!

    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        matches_rv.adapter = viewModel.adapter
        viewModel.getAllAvailableMatches()
    }

//        super.onViewCreated(view, savedInstanceState)
//
//        matches_rv.adapter = adapter
//
//        viewModel.text.observe {
//            adapter.data = it
//        }

//        viewModel.getAllAvailableMatches()

        //viewModel.getMatchesByUser()
        //viewModel.getMatchesByTournament()

        /*viewModel.getGamesByMode()
        viewModel.getGamesContainingName()


        viewModel.getRegistrationsByMatch()
        viewModel.getRegistrationByTournament()
        viewModel.getRegistrationsByUser()

        viewModel.getTournamentsByAdmin()
        viewModel.getShowcaseTournaments()
        viewModel.getTournamentsByGame()
        viewModel.getTournamentsByMode()
        viewModel.getTournamentsContainingTitle()

        viewModel.getUserInformation()

        viewModel.isAccountVerified()
        viewModel.isSubscribedAccount()

        viewModel.createGameMode()
        viewModel.createGame()
        viewModel.createUser()
        viewModel.createTournament()
        viewModel.createMatch()
        viewModel.createRegistration()*/


}