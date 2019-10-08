package com.example.myapplication.entities

import com.soywiz.klock.DateTimeTz

class MatchEntity(
    val id: Long,
    val matchDateTime: DateTimeTz,
    val playersCount: Int,
    val isRegistrationPossible: Boolean,
    val tournament: TournamentEntity
)