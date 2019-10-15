package com.example.myapplication.rawresponses.createresponces

import io.ktor.http.Url

data class CreateTournamentJSON(
    val playersNumber: Int,
    val title: String,
    val tournamentDescription: String,
    val tournamentMode: String,
    val adminLink: Url,
    val gameLink: Url
)