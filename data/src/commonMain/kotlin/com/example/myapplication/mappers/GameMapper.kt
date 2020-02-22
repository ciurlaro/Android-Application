package com.example.myapplication.mappers

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MultipleGamesJSON
import io.ktor.http.URLProtocol
import io.ktor.http.Url
import io.ktor.http.parametersOf

class GameMapper(
    private val protocol: String,
    private val host: String,
    private val port: Int
) : MultipleFromRemoteMapper<MultipleGamesJSON, GameJSON, GameEntity> {

    override fun fromRemoteSingle(remote: GameJSON) =
        with(remote) {
            GameEntity(
                gameName, Url(
                    when (protocol) {
                        "http" -> URLProtocol.HTTP
                        "https" -> URLProtocol.HTTPS
                        else -> error("Unknown protocol")
                    }, host, port, image, parametersOf(), "", null, null, false
                ).toString(),
                Url(
                    when (protocol) {
                        "http" -> URLProtocol.HTTP
                        "https" -> URLProtocol.HTTPS
                        else -> error("Unknown protocol")
                    }, host, port, icon, parametersOf(), "", null, null, false
                ).toString()
            )
        }

    override fun fromRemoteMultiple(remote: MultipleGamesJSON) =
        remote._embedded.gameEntities.map {
            fromRemoteSingle(it)
        }

}
