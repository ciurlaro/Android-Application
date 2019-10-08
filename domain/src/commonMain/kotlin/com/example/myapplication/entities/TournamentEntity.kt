package com.example.myapplication.entities

class TournamentEntity(
    val id: Long,
    val playersNumber: Int,
    val title: String,
    val tournamentDescription: String,
    val tournamentMode: String,
    val admin: UserEntity,
    val game: GameEntity
)