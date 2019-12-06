package com.example.myapplication.ui.items

import android.annotation.SuppressLint
import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.MatchEntity
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.android.synthetic.main.item_match.view.*

data class MatchFlexibleItem(
    val matchEntity: MatchEntity,
    val count: Int,
    val alreadyRegistered: Boolean
) : AbstractFlexibleItem<MatchFlexibleItem.ViewHolder>() {

    override fun bindViewHolder(
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>?,
        holder: ViewHolder,
        position: Int,
        payloads: MutableList<Any>?
    ) {
        holder.render(matchEntity, count, alreadyRegistered)
    }

    override fun createViewHolder(
        view: View,
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
    ) = ViewHolder(view, adapter)

    override fun getLayoutRes() = R.layout.item_match

    @SuppressLint("SetTextI18n")
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

            match_date.text =
                "DATE: ${data.matchDateTime.dayOfMonth}/${data.matchDateTime.month}/${data.matchDateTime.year}"
            match_time.text = "TIME: ${data.matchDateTime.hours}:${data.matchDateTime.minutes}"
            match_players.text = """${data.tournament.playersNumber}/$count"""
        }
    }
}
