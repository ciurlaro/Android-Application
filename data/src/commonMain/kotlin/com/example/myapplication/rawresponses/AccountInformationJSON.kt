package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class AccountStatusJSON(val verified: Boolean)

@Serializable
data class SubscriptionStatusJSON(val subscriber: Boolean)