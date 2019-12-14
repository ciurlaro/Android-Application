package com.example.myapplication.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.ui.tournament.TournamentDetailActivity
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.fragment_home.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.launch

@ExperimentalCoroutinesApi
@FlowPreview
class HomeFragment : BaseFragment() {

    private val viewModel: HomeViewModel by viewModelInstance()
    private val adapter by lazy { FlexibleAdapter<TournamentFlexibleItem>(emptyList()) }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_home, container, false)!!

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        matches_recyclerview.adapter = adapter
        with(viewModel) {
            tournaments.observe {
                adapter.addItems(0, it.map { TournamentFlexibleItem(it) })
                adapter.mItemClickListener = FlexibleAdapter.OnItemClickListener { _, position ->
                    startActivity(TournamentDetailActivity, it[position].id)
                    true
                }
            }
            viewModel.getShowcaseTournaments()
        }
    }

}