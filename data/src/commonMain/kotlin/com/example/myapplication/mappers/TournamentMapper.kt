package com.example.myapplication.mappers

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.TournamentJSON
import com.example.myapplication.rawresponses.UserJSON

class TournamentMapper(
    private val gameMapper: GameMapper,
    private val userMapper: UserMapper
) : SingleFromRemoteMapper<Triple<TournamentJSON, GameJSON, UserJSON>, TournamentEntity>{

    override fun fromRemoteSingle(remote: Triple<TournamentJSON, GameJSON, UserJSON>) =
        with(remote) {
            TournamentEntity(
                first.id,
                first.playersNumber,
                first.tournamentDescription,
                first.tournamentMode,
                first.title,
                userMapper.fromRemoteSingle(third),
                gameMapper.fromRemoteSingle(second)

            )
        }

}
