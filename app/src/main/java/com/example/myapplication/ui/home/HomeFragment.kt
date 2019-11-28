package com.example.myapplication.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.usecases.tournament.GetShowCaseTournamentsUseCase
import kotlinx.android.synthetic.main.fragment_home.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch
import org.kodein.di.erased.instance

@ExperimentalCoroutinesApi
class HomeFragment : BaseFragment() {

    private val viewModel: HomeViewModel by viewModelInstance()

    @ExperimentalCoroutinesApi
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_home, container, false)!!

    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        matches_rv.adapter = viewModel.adapter
        lifecycleScope.launch{
            viewModel.getShowcaseTournaments()
        }
    }

}