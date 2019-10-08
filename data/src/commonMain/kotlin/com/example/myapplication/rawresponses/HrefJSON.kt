package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class HrefJSON(
    val href: String,
    val templated: Boolean? = null
)