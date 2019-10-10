package com.example.myapplication.entities

import kotlin.js.JsName

@JsName("RegistrationEntity")
class RegistrationEntity(
    val user: UserEntity,
    val match: MatchEntity,
    val outcome: String
)

