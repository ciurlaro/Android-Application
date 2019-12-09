package com.example.myapplication.ui.items

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.GameEntity
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.android.synthetic.main.item_game.view.*


data class CreateTournamentFlexibleItem(val gameEntity: GameEntity) :
    AbstractFlexibleItem<CreateTournamentFlexibleItem.ViewHolder>() {

    override fun bindViewHolder(
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
        holder: ViewHolder,
        position: Int,
        payloads: MutableList<Any>
    ) {
        holder.render(gameEntity)
    }

    override fun createViewHolder(
        view: View,
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
    ) =
        ViewHolder(view, adapter)

    override fun getLayoutRes() = R.layout.activity_players_spinner

    class ViewHolder(view: View, adapter: FlexibleAdapter<*>) : FlexibleViewHolder(view, adapter) {

        fun render(data: GameEntity) = with(itemView) {
            Glide.with(itemView.context)
                .load(data.icon)
                .into(game_item_icon)

            game_item_textview.text = data.name
        }
    }
}