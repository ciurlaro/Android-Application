package com.example.myapplication.rawresponses.createresponses

import kotlinx.serialization.Serializable

@Serializable
data class CreateRegistrationJSON(
    val user: String,
    val match: String,
    val outcome: String? = null
)