package com.example.myapplication.entities

data class UserEntity(
    val id: String,
    val email: String,
    val nickname: String,
    val image: String? = null,
    val isSubscriber: Boolean
)