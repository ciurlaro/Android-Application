package com.example.myapplication.modules

import com.example.myapplication.BuildConfig
import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.client.engine.okhttp.OkHttp
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.http.*
import org.kodein.di.Kodein
import org.kodein.di.generic.bind
import org.kodein.di.generic.eagerSingleton

object NetworkModule : KodeinModuleProvider {

    private val Url.hostWithPortIfRequired
        get() = if (port == protocol.defaultPort) host else hostWithPort
    private val Url.fullUrl
        get() = "${protocol.name}://$hostWithPortIfRequired$fullPath"

    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<HttpClient>() with eagerSingleton {
            @Suppress("ConstantConditionIf")
            if(BuildConfig.BUILD_TYPE == "mock") {
                HttpClient(MockEngine) {
                    install(JsonFeature) {
                        serializer = KotlinxSerializer()
                    }

                    engine {
                        addHandler { request ->
                            when (request.url.fullUrl) {
                                "https://example.org/" -> {
                                    val responseHeaders = headersOf("Content-Type" to listOf(ContentType.Text.Plain.toString()))
                                    respond("Hello, world", headers = responseHeaders)
                                }
                                "https:client..." -> {
                                    val responseHeaders = headersOf("Content-Type" to listOf(ContentType.Text.Plain.toString()))
                                    respond("Hello, world", headers = responseHeaders)
                                }
                                else -> error("Unhandled ${request.url.fullUrl}")
                            }
                        }
                    }
                }
            } else
                HttpClient(OkHttp) {
                    install(JsonFeature) {
                        serializer = KotlinxSerializer()
                    }
                }
        }
    }

}