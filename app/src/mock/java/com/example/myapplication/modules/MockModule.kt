package com.example.myapplication.modules

import android.content.res.Resources
import android.util.Log
import androidx.annotation.RawRes
import com.example.myapplication.R
import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.client.request.HttpRequestData
import io.ktor.http.*
import io.ktor.http.HttpMethod.Companion.Delete
import io.ktor.http.HttpMethod.Companion.Get
import io.ktor.http.HttpMethod.Companion.Post
import io.ktor.http.HttpMethod.Companion.Put
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object MockModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<HttpClient>(overrides = true) with singleton {
            HttpClient(MockEngine) {
                install(JsonFeature) {
                    serializer = KotlinxSerializer()
                }
                engine {
                    addHandler {
                        Log.d("MockEngine", "$it")
                        handleMockEngineRequest2(it, instance())
                    }
                }
            }
        }
    }

    private fun respondJsonFromRawResources(@RawRes resId: Int, resources: Resources) = respond(
        resources.openRawResource(resId).bufferedReader().use { it.readText() },
        headers = headersOf(HttpHeaders.ContentType to listOf(ContentType.Application.Json.toString()))
    )

    private fun buildMockEngineError(request: HttpRequestData): Nothing =
        error("$request cannot be handled by the mock engine")

    private fun handleMockEngineRequest(request: HttpRequestData, res: Resources) = when {
        "tournament" == request.url.fullPath || "tournament/search" in request.url.fullPath -> when (request.method) {
            Get -> respondJsonFromRawResources(R.raw.multiple_matches_response, res)
            else -> buildMockEngineError(request)
        }
        "tournament" in request.url.fullPath -> when (request.method) {
            Get, Post, Put -> respondJsonFromRawResources(R.raw.tournament_response, res)
            Delete -> respond("", HttpStatusCode.NoContent)
            else -> buildMockEngineError(request)
        }
        "game" == request.url.fullPath || "game/search" in request.url.fullPath -> when (request.method) {
            Get -> respondJsonFromRawResources(R.raw.multiple_games_response, res)
            else -> buildMockEngineError(request)
        }
        "game" in request.url.fullPath -> when (request.method) {
            Get, Post, Put -> respondJsonFromRawResources(R.raw.game_response, res)
            Delete -> respond("", HttpStatusCode.NoContent)
            else -> buildMockEngineError(request)
        }
        "match" == request.url.fullPath || "match/search" in request.url.fullPath -> when (request.method) {
            Get -> respondJsonFromRawResources(R.raw.multiple_matches_response, res)
            else -> buildMockEngineError(request)
        }
        "match" in request.url.fullPath -> when (request.method) {
            Get, Post, Put -> respondJsonFromRawResources(R.raw.match_response, res)
            Delete -> respond("", HttpStatusCode.NoContent)
            else -> buildMockEngineError(request)
        }
        "registration" == request.url.fullPath || "registration/search" in request.url.fullPath -> when (request.method) {
            Get -> respondJsonFromRawResources(R.raw.multiple_registrations_response, res)
            else -> buildMockEngineError(request)
        }
        "registration" in request.url.fullPath -> when (request.method) {
            Get, Post, Put -> respondJsonFromRawResources(R.raw.registration_response, res)
            Delete -> respond("", HttpStatusCode.NoContent)
            else -> buildMockEngineError(request)
        }
        "user" == request.url.fullPath || "user/search" in request.url.fullPath -> when (request.method) {
            Get -> respondJsonFromRawResources(R.raw.multiple_users_response, res)
            else -> buildMockEngineError(request)
        }
        "currentUser" in request.url.fullPath || "user" in request.url.fullPath -> when (request.method) {
            Get, Post, Put -> respondJsonFromRawResources(R.raw.user_response, res)
            Delete -> respond("", HttpStatusCode.NoContent)
            else -> buildMockEngineError(request)
        }
        else -> buildMockEngineError(request)
    }

    private fun handleMockEngineRequest2(
        request: HttpRequestData,
        res: Resources
    ) = with(request) {
        when {
            url.fullPath.startsWith("/user/search") -> when (method) {
                Get -> respondJsonFromRawResources(R.raw.multiple_users_response, res)
                else -> buildMockEngineError(request)
            }
            url.fullPath.matches(Regex("^/user/\\d")) || url.fullPath == "currentUser"
                    || url.fullPath.matches(Regex("/tournament/\\d*/admin")) -> when (request.method) {
                Get, Post, Put -> respondJsonFromRawResources(R.raw.user_response, res)
                Delete -> respond("", HttpStatusCode.NoContent)
                else -> buildMockEngineError(request)
            }
            url.fullPath.startsWith("/game/search") || url.fullPath == "game" -> when (method) {
                Get -> respondJsonFromRawResources(R.raw.multiple_games_response, res)
                else -> buildMockEngineError(request)
            }
            url.fullPath.matches(Regex("^/game/\\d*"))
                    || url.fullPath.matches(Regex("/tournament/\\d*/game")) -> when (request.method) {
                Get, Post, Put -> respondJsonFromRawResources(R.raw.game_response, res)
                Delete -> respond("", HttpStatusCode.NoContent)
                else -> buildMockEngineError(request)
            }
            url.fullPath.startsWith("/tournament/search") || url.fullPath == "tournament" -> when (method) {
                Get -> respondJsonFromRawResources(R.raw.multiple_tournaments_response, res)
                else -> buildMockEngineError(request)
            }
            url.fullPath.matches(Regex("^/tournament/\\d*"))
                    || url.fullPath.matches(Regex("/match/\\d*/tournamentInvolved")) -> when (request.method) {
                Get, Post, Put -> respondJsonFromRawResources(R.raw.tournament_response, res)
                Delete -> respond("", HttpStatusCode.NoContent)
                else -> buildMockEngineError(request)
            }
            url.fullPath.startsWith("/match/search") || url.fullPath == "match" -> when (method) {
                Get -> respondJsonFromRawResources(R.raw.multiple_matches_response, res)
                else -> buildMockEngineError(request)
            }
            url.fullPath.matches(Regex("^/match/\\d*")) -> when (request.method) {
                Get, Post, Put -> respondJsonFromRawResources(R.raw.match_response, res)
                Delete -> respond("", HttpStatusCode.NoContent)
                else -> buildMockEngineError(request)
            }
            url.fullPath.startsWith("/registration/search") || url.fullPath == "match" -> when (method) {
                Get -> respondJsonFromRawResources(R.raw.multiple_registrations_response, res)
                else -> buildMockEngineError(request)
            }
            url.fullPath.matches(Regex("^/registration/\\d*")) -> when (request.method) {
                Get, Post, Put -> respondJsonFromRawResources(R.raw.registration_response, res)
                Delete -> respond("", HttpStatusCode.NoContent)
                else -> buildMockEngineError(request)
            }
            else -> buildMockEngineError(request)
        }
    }

}
