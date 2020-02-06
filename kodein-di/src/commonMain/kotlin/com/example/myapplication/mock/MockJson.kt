package com.example.myapplication.mock

enum class MockJson {

    SINGLE_GAME_RESPONSE, MULTIPLE_GAME_RESPONSE, SINGLE_GAME_MODE_RESPONSE, MULTIPLE_GAME_MODES_RESPONSE,
    SINGLE_TOURNAMENT_RESPONSE, MULTIPLE_TOURNAMENTS_RESPONSE, SINGLE_REGISTRATION_RESPONSE,
    MULTIPLE_REGISTRATIONS_RESPONSE, VERIFICATION_STATUS_RESPONSE, SUBSCRIPTION_STATUS_RESPONSE;

    companion object {
        fun fromString(string: String) = when (string) {
            "single_game_response" -> SINGLE_GAME_RESPONSE
            "multiple_game_response" -> MULTIPLE_GAME_RESPONSE
            "single_game_mode_response" -> SINGLE_GAME_MODE_RESPONSE
            "multiple_game_modes_response" -> MULTIPLE_GAME_MODES_RESPONSE
            "single_tournament_response" -> SINGLE_TOURNAMENT_RESPONSE
            "multiple_tournament_response" -> MULTIPLE_TOURNAMENTS_RESPONSE
            "single_registration_response" -> SINGLE_REGISTRATION_RESPONSE
            "multiple_registration_response" -> MULTIPLE_REGISTRATIONS_RESPONSE
            "verification_status_response" -> VERIFICATION_STATUS_RESPONSE
            "subscription_status_response" -> SUBSCRIPTION_STATUS_RESPONSE
            else -> error("$string have no corresponding MockJson value.")
        }
    }
}