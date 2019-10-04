package com.example.myapplication.mappers

import com.example.myapplication.data.TournamentEntity
import com.example.myapplication.rawresponses.TournamentJSON

class TournamentMapper :
    BaseMapper<TournamentJSON, TournamentEntity> {
    override fun fromRemote(remote: TournamentJSON) =
        TournamentEntity(
            remote.id,
            remote.playersNumber,
            remote.tournamentDescription,
            remote.tournamentMode,
            remote.adminId
        )
}