package com.example.myapplication.ui.search

import android.view.View
import android.widget.Toast
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.match.GetAllAvailableMatchesByParametersUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.android.synthetic.main.item_match.view.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onEach

class SearchViewModel(
    private val getAllAvailableMatchesByParametersUseCase: GetAllAvailableMatchesByParametersUseCase
) : ViewModel() {

    private val searchViewAdapter = FlexibleAdapter<Model>(emptyList())

    val adapter
        get() = searchViewAdapter as RecyclerView.Adapter<*>

    data class Model(
        val matchEntity: MatchEntity,
        val count: Int,
        val alreadyRegistered: Boolean
    ) : AbstractFlexibleItem<Model.ViewHolder>() {

        override fun bindViewHolder(
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
            holder: ViewHolder,
            position: Int,
            payloads: MutableList<Any>
        ) {
            holder.render(matchEntity, count, alreadyRegistered)
        }

        override fun createViewHolder(
            view: View,
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
        ) = ViewHolder(view, adapter)

        override fun getLayoutRes() = R.layout.item_match

        class ViewHolder(view: View, adapter: FlexibleAdapter<*>) : FlexibleViewHolder(view, adapter) {
            fun render(data: MatchEntity, count: Int, alreadyRegistered: Boolean) = with(itemView) {
                Glide.with(itemView.context)
                    .load(data.tournament.game.icon)
                    .into(game_icon)

                Glide.with(itemView.context)
                    .load(data.tournament.game.image)
                    .into(game_image)

                tournament_name.text = data.tournament.title
                game_name.text = data.tournament.game.name
/*
                match_date.text =
                    "DATE: ${data.matchDateTime.dayOfMonth}/${data.matchDateTime.month}/${data.matchDateTime.year}"
                match_time.text = "TIME: ${data.matchDateTime.hours}:${data.matchDateTime.minutes}"
                match_players.text = """${data.tournament.playersNumber}/$count"""
*/
                match_switch.isChecked = alreadyRegistered
                match_switch.setOnCheckedChangeListener { _, isChecked ->
                    if (isChecked) {
                        match_switch.isChecked = false
                        Toast.makeText(context, "Registration to ${tournament_name.text} succeded!", Toast.LENGTH_LONG)
                            .show()
                    } else {
                        match_switch.isChecked = true
                        Toast.makeText(
                            context,
                            "Unregistration to ${tournament_name.text} succeded!",
                            Toast.LENGTH_LONG
                        )
                            .show()
                    }

                }

            }
        }
    }


    @ExperimentalCoroutinesApi
    fun getTournamentsByMode(gameName: String) =
        getAllAvailableMatchesByParametersUseCase.buildAction(gameName = gameName)
            .map { Model(it.first, it.second, it.third) }
            .onEach { searchViewAdapter.addItem(it) }
            .launchIn(viewModelScope)


}