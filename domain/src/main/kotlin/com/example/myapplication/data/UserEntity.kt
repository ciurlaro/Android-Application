package com.example.myapplication.data

data class UserEntity(
    val id: String,
    val email: String,
    val nickname: String,
    val image: String? = null,
    val isAccountVerified: Boolean,
    val isSubscriber: Boolean
)