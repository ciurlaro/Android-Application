package com.example.myapplication.ui.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.R
import com.example.myapplication.ui.items.TournamentFlexibleItem

class SearchAdapter : RecyclerView.Adapter<SearchAdapter.ViewHolder>() {

    private val data = mutableListOf<TournamentFlexibleItem>()

    fun addElement(e: TournamentFlexibleItem) {
        data.add(e)
        notifyItemInserted(data.lastIndex)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        LayoutInflater.from(parent.context).inflate(R.layout.item_match, parent, false)
            .let { ViewHolder(it) }

    override fun getItemCount() =
        data.size

    override fun onBindViewHolder(holder: ViewHolder, position: Int) =
        holder.render(data[position])

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {

        fun render(data: TournamentFlexibleItem) {
            TODO()
        }
    }
}
//with(itemView) {
//           val (tournamentEntity, date) = data
//            Picasso.get().load(tournamentEntity.game.image).into(game_image)
//            Picasso.get().load(tournamentEntity.game.icon).into(game_icon)
//            tournament_name.text = tournamentEntity.title
//            match_date.text = resources.getString(
//                R.string.date_text,
//                date.format("dd/MM/yyyy")
//            )
//            match_time.text = resources.getString(
//                R.string.time_text,
//                date.format("HH:mm 'GMT'z")
//            )
//            game_name.text = tournamentEntity.game.name
//        }

