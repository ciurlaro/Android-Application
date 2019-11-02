package com.example.myapplication.mappers.entitieslinkmapper

import com.example.myapplication.mappers.SingleToRemoteMapper
import io.ktor.http.URLProtocol
import io.ktor.http.Url

class TournamentLinkMapper(
    private val protocol: String,
    private val host: String,
    private val port: Int
) : SingleToRemoteMapper<Url, Long> {

    override fun toRemoteSingle(entity: Long) =
        Url(URLProtocol(protocol, port), host, port, "/tournament/$entity",
            io.ktor.http.parametersOf(), "", null, null, false)

}

