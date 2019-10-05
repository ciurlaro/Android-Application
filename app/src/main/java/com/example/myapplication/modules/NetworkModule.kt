package com.example.myapplication.modules

import io.ktor.client.HttpClient
import io.ktor.client.engine.okhttp.OkHttp
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.singleton

object NetworkModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<HttpClient>() with singleton {
            HttpClient(OkHttp) {
                install(JsonFeature) {
                    serializer = KotlinxSerializer()
                }
            }
        }

    }

}