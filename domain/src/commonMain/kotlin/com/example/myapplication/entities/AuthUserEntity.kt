package com.example.myapplication.entities

data class AuthUserEntity(
    val id: String,
    val email: String,
    val nickname: String
)

val AuthUserEntity.storageImagePath
    get() = "users/$id/profile"