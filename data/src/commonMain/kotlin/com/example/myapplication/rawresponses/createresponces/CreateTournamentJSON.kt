package com.example.myapplication.rawresponses.createresponces

import kotlinx.serialization.Serializable

@Serializable
data class CreateTournamentJSON(
    val playersNumber: Int,
    val title: String,
    val tournamentDescription: String,
    val tournamentMode: String,
    val adminLink: String,
    val gameLink: String
)