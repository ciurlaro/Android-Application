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
import kotlinx.android.synthetic.main.simple_item_game.view.*

data class SimpleGameFlexibleItem(val gameEntity: GameEntity) :
    AbstractFlexibleItem<SimpleGameFlexibleItem.ViewHolder>() {

    override fun bindViewHolder(
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>?,
        holder: ViewHolder,
        position: Int,
        payloads: MutableList<Any>?
    ) {
        holder.render(gameEntity)
    }

    override fun createViewHolder(
        view: View,
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
    ) =
        ViewHolder(view, adapter)

    override fun getLayoutRes() = R.layout.simple_item_game

    class ViewHolder(view: View, adapter: FlexibleAdapter<*>) : FlexibleViewHolder(view, adapter) {
        fun render(data: GameEntity) = with(itemView) {
            Glide.with(this)
                .load(data.icon)
                .into(simple_game_view_image)
            simple_game_view_text.text = data.name
        }
    }

}