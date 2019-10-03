package com.example.myapplication.network

import com.example.myapplication.BuildConfig.*
import io.ktor.http.URLBuilder

val BACKEND_FULL_URL
    get() = URLBuilder("$SERVER_PROTOCOL://$SERVER_URL:$SERVER_PORT").build()
