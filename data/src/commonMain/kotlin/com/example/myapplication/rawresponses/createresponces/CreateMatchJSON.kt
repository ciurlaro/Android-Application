package com.example.myapplication.rawresponses.createresponces

import com.soywiz.klock.DateTimeTz
import io.ktor.http.Url

data class CreateMatchJSON(
    val matchDateTime: DateTimeTz,
    val playersCount: Int,
    val isRegistrationPossible: Boolean,
    val tournamentLink: Url
)