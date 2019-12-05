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

        return when (request.url.fullPath) {
            "/isAccountVerified" -> "verification_status_response"
            "/isAccountSubscribed" -> "subscription_status_response"
            else -> singleOrMultipleResponse(request, words)
        }.let { respondJsonFromRawResources(it) }
    }

    private fun singleOrMultipleResponse(request: HttpRequestData, words: List<String>) =
        when (words.size) {
            1 ->
                when (request.method) {
                    HttpMethod.Get -> "multiple_${words[0]}_response"
                    else -> "single_${words[0]}_response"
                }
            2 -> "single_${words[0]}_response"
            else ->
                when (words[1]) {
                    "search" -> "multiple_${words[0]}_response"
                    else ->
                        when {
                            listOf("game", "tournament", "registration", "match", "user").contains(words.last()) ->
                                "single_${words.last()}_response"
                            words.last() == "admin" -> "single_user_response"
                            else -> error("$request cannot be handled by the mock engine")
                        }
                }
        }
}
