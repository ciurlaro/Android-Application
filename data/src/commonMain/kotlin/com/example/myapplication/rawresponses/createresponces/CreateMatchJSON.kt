package com.example.myapplication.rawresponses.createresponces

import kotlinx.serialization.Serializable

@Serializable
data class CreateMatchJSON(
    val matchDateTime: String,
    val playersCount: Int,
    val isRegistrationPossible: Boolean,
    val tournamentLink: String
)