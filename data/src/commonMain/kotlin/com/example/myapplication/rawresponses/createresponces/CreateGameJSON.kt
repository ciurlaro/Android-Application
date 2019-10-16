package com.example.myapplication.rawresponses.createresponces

import kotlinx.serialization.Serializable

@Serializable
data class CreateGameJSON(
    val gameName: String,
    val availableModes: List<String>,
    val image: String,
    val icon: String
)
