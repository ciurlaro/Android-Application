package com.example.myapplication.ui.utils

import android.app.AlertDialog
import android.content.Context
import com.example.myapplication.R
import com.example.myapplication.entities.GameEntity

fun buildGameChooserDialog(context: Context, games: List<GameEntity>, onGameSelected: (GameEntity) -> Unit) =
    AlertDialog.Builder(context)
        .setItems(games.map { it.name }.toTypedArray()) { _, selected ->
            onGameSelected(games[selected])
        }
        .setTitle(R.string.select_a_game)
        .setIcon(R.drawable.ic_videogame_asset_black_24dp)