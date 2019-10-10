package com.example.myapplication.entities

import kotlin.js.JsName

@JsName("TournamentEntity")
class TournamentEntity(
    val id: Long,
    val playersNumber: Int,
    val title: String,
    val tournamentDescription: String,
    val tournamentMode: String,
    val admin: UserEntity,
    val game: GameEntity
)