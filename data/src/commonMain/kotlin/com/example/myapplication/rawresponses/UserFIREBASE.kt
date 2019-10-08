package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class UserFIREBASE(
    val id: String,
    val email: String,
    val nickname: String,
    val image: String? = null,
    val isAccountVerified: Boolean
)