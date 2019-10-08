package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class PageJSON(
    val size: Int,
    val totalElements: Long,
    val totalPages: Long,
    val number: Long
)