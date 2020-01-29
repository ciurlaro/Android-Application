package com.example.myapplication.mappers

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MultipleGamesJSON

class GameMapper :
    MultipleFromRemoteMapper<MultipleGamesJSON, GameJSON, GameEntity> {

    override fun fromRemoteSingle(remote: GameJSON) =
        with(remote) {
            GameEntity(gameName, availableModes, image, icon)
        }

    override fun fromRemoteMultiple(remote: MultipleGamesJSON) =
        remote._embedded.gameEntities.map {
            fromRemoteSingle(it)
        }

}
