package com.example.myapplication.network

import com.example.myapplication.BuildConfig.*
import io.ktor.http.URLBuilder

object Endpoints {

    val TOURNAMENTS
        get() = URLBuilder("$SERVER_PROTOCOL://$SERVER_URL:$SERVER_PORT/tournament").build()

    val MATCHES
        get() = URLBuilder("$SERVER_PROTOCOL://$SERVER_URL:$SERVER_PORT/match").build()

    val RESGISTRATIONS
        get() = URLBuilder("$SERVER_PROTOCOL://$SERVER_URL:$SERVER_PORT/registration").build()

    val GAMES
        get() = URLBuilder("$SERVER_PROTOCOL://$SERVER_URL:$SERVER_PORT/game").build()

}