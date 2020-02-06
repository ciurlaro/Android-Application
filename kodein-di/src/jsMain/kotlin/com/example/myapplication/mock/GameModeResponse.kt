package com.example.myapplication.mock

object GameModeResponse : JsonMockProvider {
    override val json = """
        {
          "modeName": "S&D",
          "_links": {
            "self": {
              "href": "http://localhost:8080/mode/S&D"
            },
            "modeEntity": {
              "href": "http://localhost:8080/mode/S&D"
            }
          }
        }
    """.trimIndent()
}