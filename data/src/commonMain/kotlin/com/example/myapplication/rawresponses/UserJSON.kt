package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class UserJSON(
    val id: String,
    val email: String,
    val nickname: String,
    val image: String,
    val subscriber: Boolean
)
