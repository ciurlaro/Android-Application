package com.example.myapplication.data

import com.soywiz.klock.DateTimeTz

class MatchEntity(
    val id: Long,
    val matchDateTime: DateTimeTz,
    val tournament: TournamentEntity
)