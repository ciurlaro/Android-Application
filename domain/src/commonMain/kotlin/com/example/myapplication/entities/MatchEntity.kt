package com.example.myapplication.entities

import com.soywiz.klock.DateTimeTz
import kotlin.js.JsName

@JsName("MatchEntity")
class MatchEntity(
    val id: Long,
    val matchDateTime: DateTimeTz,
    val playersCount: Int,
    val isRegistrationPossible: Boolean,
    val tournament: TournamentEntity
)