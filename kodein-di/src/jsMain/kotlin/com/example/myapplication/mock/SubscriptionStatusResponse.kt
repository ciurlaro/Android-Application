package com.example.myapplication.mock

object SubscriptionStatusResponse : JsonMockProvider {
    override val json = """
        {
          "subscriber": true
        }
    """.trimIndent()
}