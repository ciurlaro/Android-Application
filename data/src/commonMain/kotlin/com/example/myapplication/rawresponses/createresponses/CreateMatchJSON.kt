package com.example.myapplication.rawresponses.createresponses

import kotlinx.serialization.Serializable

@Serializable
data class CreateMatchJSON(
    val matchDateTime: String,
    val playersCount: Int,
    val isRegistrationPossible: Boolean,
    val tournament: String
)