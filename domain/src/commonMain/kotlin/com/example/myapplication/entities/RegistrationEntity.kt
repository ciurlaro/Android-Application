package com.example.myapplication.entities

import kotlin.js.JsName

@JsName("RegistrationEntity")
class RegistrationEntity(
    val user: UserEntity,
    val tournament: TournamentEntity,
    val outcome: String? = null
)

