package com.example.myapplication.mappers

import com.example.myapplication.data.GameEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MultipleGamesJSON

class GameMapper : MultipleFromRemoteMapper<MultipleGamesJSON, GameJSON, GameEntity> {

    override fun fromRemoteSingle(remote: GameJSON): GameEntity {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun fromRemoteMultiple(remote: MultipleGamesJSON): List<GameEntity> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


}
