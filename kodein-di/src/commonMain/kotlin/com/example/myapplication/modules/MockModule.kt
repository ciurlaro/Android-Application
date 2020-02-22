package com.example.myapplication.modules

import com.example.myapplication.mock.MockJson
import com.example.myapplication.mock.bindMock
import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.client.features.logging.Logging
import io.ktor.client.request.HttpRequestData
import io.ktor.client.request.HttpResponseData
import io.ktor.http.*
import org.kodein.di.DKodein
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object MockModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        MockJson.values().forEach {
            bindMock(it)
        }
        bind<HttpClient>(overrides = true) with singleton {
            HttpClient(MockEngine) {
                install(JsonFeature) {
                    serializer = KotlinxSerializer()
                }
                if (instance("isDebug"))
                    install(Logging) {
                        level = instance("networkLogLevel")
                    }
                engine {
                    addHandler {
                        handleMockEngineRequest(it)
                    }
                }
            }
        }
    }

    private fun DKodein.respondJsonFromRawResources(mock: MockJson) = respond(
        instance<String>(tag = mock),
        headers = headersOf(HttpHeaders.ContentType to listOf(ContentType.Application.Json.toString()))
    )

    private fun DKodein.handleMockEngineRequest(request: HttpRequestData): HttpResponseData {
        val words = request.url.fullPath.removePrefix("/").split("/")

        return when (request.url.fullPath) {
            "api/isAccountVerified" -> MockJson.VERIFICATION_STATUS_RESPONSE
            "api/isAccountSubscribed" -> MockJson.SUBSCRIPTION_STATUS_RESPONSE
            else -> singleOrMultipleResponse(request, words.subList(1, words.size))
        }.let { respondJsonFromRawResources(it) }
    }

    private fun singleOrMultipleResponse(request: HttpRequestData, words: List<String>) =
        when (words.size) {
            1 -> if (words[0].split("?")[0] == "user")
                "single_user_response"
            else when (request.method) {
                HttpMethod.Get -> "multiple_${words[0].split("?")[0]}_response"
                else -> "single_${words[0]}_response"
            }
            2 -> "single_${words[0]}_response"
            else -> when (words[1]) {
                "search" -> "multiple_${words[0]}_response"
                else ->
                    when {
                        listOf(
                            "game",
                            "tournament",
                            "registration",
                            "match",
                            "user"
                        ).contains(words.last()) -> "single_${words.last()}_response"
                        words.last() == "admin" -> "single_user_response"
                        else -> error("$request cannot be handled by the mock engine")
                    }
            }
        }.let { MockJson.fromString(it) }
}
