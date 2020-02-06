package com.example.myapplication.mock

object RegistrationResponse : JsonMockProvider {
    override val json = """
        {
          "id": 1,
          "outcome": "Winner",
          "_links": {
            "self": {
              "href": "http://localhost:8080/registration/1"
            },
            "registrationEntity": {
              "href": "http://localhost:8080/registration/1"
            },
            "tournament": {
              "href": "http://localhost:8080/registration/1/tournament"
            },
            "user": {
              "href": "http://localhost:8080/registration/1/user"
            }
          }
        }
    """.trimIndent()
}