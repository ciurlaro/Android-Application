package com.example.myapplication.rawresponses.createresponces

data class CreateGameJSON(
    val gameName: String,
    val availableModes: List<String>,
    val image: String,
    val icon: String
)
