package com.example.myapplication.network

import android.annotation.SuppressLint

enum class Endpoints {
    MATCH, TOURNAMENT, GAME, REGISTRATION
}

val Endpoints.path
    @SuppressLint("DefaultLocale")
    get() = this::class.simpleName!!.toLowerCase()