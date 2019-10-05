package com.example.myapplication.mappers

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.TournamentJSON

class TournamentMapper(
    private val gameMapper: GameMapper
) : SingleFromRemoteMapper<Pair<TournamentJSON, GameJSON>, TournamentEntity> {

    override fun fromRemoteSingle(remote: Pair<TournamentJSON, GameJSON>) = with(remote) {
        TournamentEntity(
            first.id,
            first.playersNumber,
            first.tournamentDescription,
            first.tournamentMode,
            first.adminId,
            gameMapper.fromRemoteSingle(second)
        )
    }

}