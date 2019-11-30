package com.example.myapplication.ui.search

import android.view.View
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.tournament.GetTournamentsByModeUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.android.synthetic.main.item_tournament.view.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach

class SearchViewModel(
    private val getTournamentsByModeUseCase: GetTournamentsByModeUseCase
) : ViewModel() {

    private val searchViewAdapter = FlexibleAdapter<Model>(emptyList())

    val adapter
        get() = searchViewAdapter as RecyclerView.Adapter<*>

    data class Model(
        val tournamentEntity: TournamentEntity,
        val count: Int
    ) : AbstractFlexibleItem<Model.ViewHolder>() {

        override fun bindViewHolder(
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
            holder: ViewHolder,
            position: Int,
            payloads: MutableList<Any>
        ) {
            holder.render(tournamentEntity, count)
        }

        override fun createViewHolder(
            view: View,
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
        ) = ViewHolder(view, adapter)

        override fun getLayoutRes() = R.layout.item_tournament

        class ViewHolder(view: View, adapter: FlexibleAdapter<*>) : FlexibleViewHolder(view, adapter) {
            fun render(data: TournamentEntity, count: Int) = with(itemView) {
                Glide.with(itemView.context)
                    .load(data.game.icon)
                    .into(tournament_game_icon)
                tournament_name_tv.text = data.title
                tournament_description_tv.text = data.tournamentDescription
                players_number_tv.text = """${data.playersNumber}/$count"""
            }
        }
    }


    @ExperimentalCoroutinesApi
    fun getTournamentsByMode(modeName: String) =
        getTournamentsByModeUseCase.buildAction(modeName)
            .onEach { searchViewAdapter.addItem(Model(it.first, it.second)) }
            .launchIn(viewModelScope)
}