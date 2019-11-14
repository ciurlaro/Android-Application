package com.example.myapplication.modules

import io.ktor.client.HttpClient
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.client.features.logging.Logging
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object NetworkModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<HttpClient>() with singleton {
            HttpClient {
                install(JsonFeature) {
                    serializer = KotlinxSerializer()
                }
                if (instance("isDebug"))
                    install(Logging) {
                        level = instance("networkLogLevel")
                    }
            }
        }
    }
}