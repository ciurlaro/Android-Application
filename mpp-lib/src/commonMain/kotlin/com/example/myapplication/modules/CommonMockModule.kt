package com.example.myapplication.modules

import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.client.request.HttpRequestData
import io.ktor.client.request.HttpResponseData
import io.ktor.http.*
import org.kodein.di.DKodein
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object CommonMockModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<HttpClient>(overrides = true) with singleton {
            HttpClient(MockEngine) {
                install(JsonFeature) {
                    serializer = KotlinxSerializer()
                }
                engine {
                    addHandler {
                        handleMockEngineRequest(it)
                    }
                }
            }
        }
    }

    private fun DKodein.respondJsonFromRawResources(jsonName: String) = respond(
        instance<String>(tag = jsonName),
        headers = headersOf(HttpHeaders.ContentType to listOf(ContentType.Application.Json.toString()))
    )

    private fun DKodein.handleMockEngineRequest(request: HttpRequestData): HttpResponseData {
        val words = request.url.fullPath.removePrefix("/").split("/")

        fun singleOrMultipleResponse(word: String) = when {
            listOf("game", "tournament", "registration", "match", "user").none { it == word } ->
                error("$request cannot be handled by the mock engine")
            words.size == 1 -> when (request.method) {
                HttpMethod.Get -> "multiple_${word}_response"
                else -> "single_${word}_response"
            }
            else -> when (words[1]) {
                "search" -> "multiple_${word}_response"
                else -> "single_${word}_response"
            }
        }

        return when (request.url.fullPath) {
            "/isAccountVerified" -> "verification_status_response"
            "/isAccountSubscribed" -> "subscription_status_response"
            else -> when (words.last()) {
                "game" -> "single_game_response"
                "tournament" -> "single_tournament_response"
                "registration" -> "single_registration_response"
                "match" -> "single_match_response"
                "user" -> "single_user_response"
                else -> singleOrMultipleResponse(words[0])
            }
        }.let { respondJsonFromRawResources(it) }
    }
}
