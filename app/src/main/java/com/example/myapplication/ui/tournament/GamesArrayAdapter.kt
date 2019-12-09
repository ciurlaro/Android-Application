package com.example.myapplication.ui.tournament

import android.content.Context
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.GameEntity
import kotlinx.android.synthetic.main.simple_item_game.view.*

@Suppress("UNCHECKED_CAST")
class GamesArrayAdapter(
    private val elements: List<GameEntity>,
    context: Context,
    private val onItemClicked: (game: GameEntity) -> Unit
) : ArrayAdapter<GameEntity>(context, R.layout.simple_item_game) {

    override fun getView(position: Int, convertView: View?, parent: ViewGroup) =
        renderView(elements[position], convertView ?: inflater.inflate(R.layout.simple_item_game, parent, false))

    override fun getItem(position: Int) =
        elements[position]

    override fun getCount() =
        elements.size

    override fun getFilter() = object : android.widget.Filter() {

        override fun convertResultToString(resultValue: Any?) =
            (resultValue as GameEntity).name

        override fun performFiltering(constraint: CharSequence?): FilterResults {
            val (filtered, _) = elements.partition { constraint.toString().toLowerCase() in it.name.toLowerCase() }
            return FilterResults().apply {
                values = filtered
                count = filtered.size
            }
        }

        override fun publishResults(constraint: CharSequence?, results: FilterResults?) {
            clear()
            addAll(results!!.values as List<GameEntity>)
            notifyDataSetChanged()
        }

    }

    override fun getItemId(position: Int) =
        position.toLong()

    private fun renderView(game: GameEntity, view: View) = view.apply {
        setOnClickListener { onItemClicked(game) }
        simple_game_view_text.text = game.name
        Glide.with(view)
            .load(game.icon)
            .into(simple_game_view_image)
    }

    private val inflater
        get() = when (context) {
            is AppCompatActivity -> (context as AppCompatActivity).layoutInflater
            else -> throw error("context does not provide a layout inflater")
        }
}