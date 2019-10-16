package com.example.myapplication.rawresponses.createresponses

import kotlinx.serialization.Serializable

@Serializable
data class CreateTournamentJSON(
    val playersNumber: Int,
    val title: String,
    val tournamentDescription: String,
    val tournamentMode: String,
    val admin: String,
    val game: String
)