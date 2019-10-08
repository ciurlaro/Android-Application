package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class AccountStatusJSON(val isVerified: Boolean)