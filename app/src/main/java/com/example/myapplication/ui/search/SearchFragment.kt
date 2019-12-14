package com.example.myapplication.ui.search

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.View.INVISIBLE
import android.view.View.VISIBLE
import android.view.ViewGroup
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.ui.tournament.TournamentDetailActivity
import com.example.myapplication.ui.utils.buildGameChooserDialog
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.fragment_search.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

@ExperimentalCoroutinesApi
class SearchFragment : BaseFragment() {

    private val viewModel: SearchViewModel by viewModelInstance()
    private val adapter by lazy {
        FlexibleAdapter<TournamentFlexibleItem>(emptyList())
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_search, container, false)!!

    @FlowPreview
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        search_recyclerview.adapter = adapter
        with(viewModel) {
            availableGames.observe { games ->
                select_game_button.setOnClickListener {
                    buildGameChooserDialog(requireContext(), games) {
                        selectedGame.value = it
                    }
                        .setOnCancelListener {
                            selectedGame.value = null
                        }
                        .show()
                }
            }
            selectedGame.observe {
                if (it != null) {
                    Glide.with(requireContext())
                        .load(it.icon)
                        .into(selected_game_icon)
                    selected_game_icon.visibility = VISIBLE
                    selected_game_text_view.text = it.name
                } else {
                    selected_game_icon.visibility = INVISIBLE
                    selected_game_text_view.text = resources.getString(R.string.all_games)
                }
            }
            search_button.setOnClickListener {
                fragment_search_title_textview.text?.let {
                    if (it.isNotBlank())
                        loadTournaments(it.toString())
                }
            }
            tournaments.observe {
                updateAdapter(it)
            }
            loadGames()
            tournaments.value?.let {
                if (it.isNotEmpty())
                    updateAdapter(it)
            }
        }
    }

    private fun updateAdapter(it: List<TournamentEntity>) {
        adapter.clear()
        adapter.addItems(0, it.map { TournamentFlexibleItem(it) })
        adapter.mItemClickListener = FlexibleAdapter.OnItemClickListener { _, position ->
            startActivity(TournamentDetailActivity, it[position].id)
            true
        }
    }
}