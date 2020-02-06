package com.example.myapplication.mock

import org.kodein.di.Kodein
import org.kodein.di.erased.with

val MockJson.correspondingJson
    get() = when(this) {
        MockJson.SINGLE_GAME_RESPONSE -> GameResponse.json
        MockJson.MULTIPLE_GAME_RESPONSE -> MultipleGamesResponse.json
        MockJson.SINGLE_GAME_MODE_RESPONSE -> GameModeResponse.json
        MockJson.MULTIPLE_GAME_MODES_RESPONSE -> MultipleGameModesResponse.json
        MockJson.SINGLE_TOURNAMENT_RESPONSE -> TournamentResponse.json
        MockJson.MULTIPLE_TOURNAMENTS_RESPONSE -> MultipleTournamentsResponse.json
        MockJson.SINGLE_REGISTRATION_RESPONSE -> RegistrationResponse.json
        MockJson.MULTIPLE_REGISTRATIONS_RESPONSE -> MultipleRegistrationsResponse.json
        MockJson.VERIFICATION_STATUS_RESPONSE -> VerificationStatusResponse.json
        MockJson.SUBSCRIPTION_STATUS_RESPONSE -> SubscriptionStatusResponse.json
    }

actual fun Kodein.Builder.bindMock(mockJson: MockJson) =
    constant(mockJson) with mockJson.correspondingJson