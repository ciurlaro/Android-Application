package com.example.myapplication.mock

object VerificationStatusResponse : JsonMockProvider {
    override val json = """
        {
          "verified": true
        }
    """.trimIndent()
}