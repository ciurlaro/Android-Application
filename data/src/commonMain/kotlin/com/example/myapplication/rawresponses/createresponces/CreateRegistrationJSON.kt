package com.example.myapplication.rawresponses.createresponces

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.UserEntity
import com.soywiz.klock.DateTimeTz
import io.ktor.http.Url

data class CreateRegistrationJSON(
    val userLink: Url,
    val matchLink: Url,
    val outcome: String? = null
)