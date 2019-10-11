package com.example.myapplication.entities

import kotlin.js.JsName

@JsName("GameEntity")
class GameEntity(
    val name: String,
    val availableModes: List<String>,
    val image: String,
    val icon: String
)
