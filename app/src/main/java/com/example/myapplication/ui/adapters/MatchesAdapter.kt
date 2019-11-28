package com.example.myapplication.ui.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.R
import com.example.myapplication.ui.home.HomeViewModel

class MatchesAdapter : RecyclerView.Adapter<MatchesAdapter.ViewHolder>() {

    var data = listOf<HomeViewModel.Model>()
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        LayoutInflater.from(parent.context).inflate(R.layout.item_match, parent, false)
            .let { ViewHolder(it) }

    override fun getItemCount() =
        data.size

    override fun onBindViewHolder(holder: ViewHolder, position: Int) =
        holder.render(data[position])

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {

        fun render(data: HomeViewModel.Model) = with(itemView) {
//            val (matchEntity, registeredPlayers) = data
//            Picasso.get().load(matchEntity.tournament.game.image).into(game_image)
//            Picasso.get().load(matchEntity.tournament.game.icon).into(game_icon)
//            tournament_name.text = matchEntity.tournament.title
//            match_date.text = resources.getString(
//                R.string.date_text,
//                matchEntity.matchDateTime.format("dd/MM/yyyy")
//            )
//            match_time.text = resources.getString(
//                R.string.time_text,
//                matchEntity.matchDateTime.format("HH:mm 'GMT'z")
//            )
//            match_players.text = resources.getString(
//                R.string.players_text_fraction,
//                registeredPlayers,
//                matchEntity.playersCount
//            )
//            game_name.text = matchEntity.tournament.game.name
        }

    }

}