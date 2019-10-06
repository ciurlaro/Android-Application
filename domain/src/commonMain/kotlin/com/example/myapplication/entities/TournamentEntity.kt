package com.example.myapplication.entities

class TournamentEntity(
    val id: Long,
    val playersNumber: Int,
    val tournamentDescription: String,
    val tournamentMode: String,
    val adminId: Long,
    val game: GameEntity
)