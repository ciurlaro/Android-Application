package com.example.myapplication.ui.search

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.ui.BaseFragment
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.ui.tournament.TournamentDetailActivity
import com.example.myapplication.ui.utils.resetLayoutErrorOnTextChanged
import eu.davidea.flexibleadapter.FlexibleAdapter
import it.lamba.android.utils.hideKeyboard
import kotlinx.android.synthetic.main.fragment_search.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

@ExperimentalCoroutinesApi
@FlowPreview
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
            search_button.setOnClickListener {
                fragment_search_title_textview.text?.let {
                    if (it.isNotBlank() && it.length >= 3) {
                        loadTournaments(it.toString())
                        fragment_search_title_textview.clearFocus()
                        fragment_search_edit_textview_layout.clearFocus()
                        requireContext().hideKeyboard(fragment_search_title_textview)
                    } else {
                        fragment_search_edit_textview_layout.error =
                            resources.getString(R.string.at_least_3_chars)
                    }
                }
            }
            tournaments.observe {
                updateAdapter(it)
            }
            tournaments.value?.let {
                if (it.isNotEmpty())
                    updateAdapter(it)
            }
        }
        fragment_search_title_textview.resetLayoutErrorOnTextChanged(fragment_search_edit_textview_layout)
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
