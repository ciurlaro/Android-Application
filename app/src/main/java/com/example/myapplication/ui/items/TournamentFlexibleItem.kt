package com.example.myapplication.ui.items

import android.annotation.SuppressLint
import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.android.synthetic.main.item_tournament.view.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

@SuppressLint("SetTextI18n")
@ExperimentalCoroutinesApi
data class TournamentFlexibleItem(val tournamentEntity: TournamentEntity) :
    AbstractFlexibleItem<TournamentFlexibleItem.ViewHolder>() {

    override fun bindViewHolder(
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
        holder: ViewHolder,
        position: Int,
        payloads: MutableList<Any>
    ) {
        holder.render(tournamentEntity)
    }

    override fun createViewHolder(
        view: View,
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
    ) =
        ViewHolder(view, adapter)

    override fun getLayoutRes() = R.layout.item_tournament

    class ViewHolder(view: View, adapter: FlexibleAdapter<*>) : FlexibleViewHolder(view, adapter) {

        fun render(data: TournamentEntity) = with(itemView) {
            Glide.with(itemView.context)
                .load(data.game.icon)
                .into(tournament_game_icon)
            tournament_name_textview.text = data.title
            tournament_description_textview.text = data.tournamentDescription
            game_name.text = data.game.name
            total_players.text = resources.getString(R.string.players_with_number, data.playersNumber)
        }
    }

}