package com.example.myapplication.mappers.entitieslinkmapper

import com.example.myapplication.mappers.SingleToRemoteMapper
import io.ktor.http.URLProtocol
import io.ktor.http.Url

class GameLinkMapper(
    private val protocol: String,
    private val host: String,
    private val port: Int
) : SingleToRemoteMapper<Url, String> {

    override fun toRemoteSingle(id: String) =
        Url(URLProtocol(protocol, port), host, port, "/game/$id",
            io.ktor.http.parametersOf(), "", null, null, false)

}

