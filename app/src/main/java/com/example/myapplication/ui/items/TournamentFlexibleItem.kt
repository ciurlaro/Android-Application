package com.example.myapplication.ui.items

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.ui.match.MatchActivity
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.android.synthetic.main.item_tournament.view.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

data class TournamentFlexibleItem(val tournamentEntity: TournamentEntity) :
    AbstractFlexibleItem<TournamentFlexibleItem.ViewHolder>() {

    @ExperimentalCoroutinesApi
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

        @ExperimentalCoroutinesApi
        fun render(data: TournamentEntity) = with(itemView) {
            setOnClickListener {
                context.startActivity(MatchActivity(context, data))
            }
            Glide.with(itemView.context)
                .load(data.game.icon)
                .into(tournament_game_icon)
            tournament_name_tv.text = data.title
            tournament_description_tv.text = data.tournamentDescription
        }
    }

}