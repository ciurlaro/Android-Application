package com.example.myapplication.rawresponses.createresponces

import kotlinx.serialization.Serializable

@Serializable
data class CreateUserJSON(
    val email: String,
    val password: String,
    val nickname: String,
    val image: String
)
