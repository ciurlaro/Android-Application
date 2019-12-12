package com.example.myapplication.ui.tournament

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.entities.GameEntity
import com.example.myapplication.ui.BaseDialogFragment
import com.example.myapplication.ui.items.SimpleGameFlexibleItem
import com.fondesa.recyclerviewdivider.RecyclerViewDivider
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.dialog_select_game.*

class SelectGameDialog(private val callback: (GameEntity) -> Unit) : BaseDialogFragment() {

    private val viewModel: SelectGameDialogViewModel by viewModelInstance()
    private val adapter by lazy { FlexibleAdapter<SimpleGameFlexibleItem>(emptyList()) }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
        inflater.inflate(R.layout.dialog_select_game, container, false)!!

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        simple_games_recyclerview.adapter = adapter
        RecyclerViewDivider.with(requireContext())
            .build()
            .addTo(simple_games_recyclerview)
        with(viewModel) {
            allGames.observe { games ->
                adapter.addItems(0, games.map { SimpleGameFlexibleItem(it) })
                adapter.mItemClickListener = FlexibleAdapter.OnItemClickListener { _, position ->
                    callback(games[position])
                    dismiss()
                    true
                }
            }
            loadGames()
        }
    }
}