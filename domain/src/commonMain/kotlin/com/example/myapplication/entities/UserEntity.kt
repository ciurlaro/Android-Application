package com.example.myapplication.entities

import kotlin.js.JsName

@JsName("UserEntity")
data class UserEntity(
    val id: String,
    val email: String,
    val nickname: String,
    val image: String? = null,
    val verified: Boolean,
    val subscriber: Boolean
)