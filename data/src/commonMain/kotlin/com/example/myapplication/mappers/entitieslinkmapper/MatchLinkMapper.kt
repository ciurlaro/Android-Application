package com.example.myapplication.mappers.entitieslinkmapper

import com.example.myapplication.mappers.SingleToRemoteMapper
import io.ktor.http.URLProtocol
import io.ktor.http.Url

class MatchLinkMapper(
    private val protocol: String,
    private val host: String,
    private val port: Int
) : SingleToRemoteMapper<Url, Long> {

    override fun toRemoteSingle(id: Long) =
        Url(URLProtocol(protocol, port), host, port, "/match/$id",
            io.ktor.http.parametersOf(), "", null, null, false)

}

