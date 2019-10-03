package com.example.myapplication.mappers

import com.example.myapplication.data.TournamentEntity
import com.example.myapplication.rawresponses.TournamentEntityJSON

class TournamentMapper :
    BaseMapper<TournamentEntityJSON, TournamentEntity> {
    override fun fromRemote(remote: TournamentEntityJSON) =
        TournamentEntity(
            remote.id,
            remote.playersNumber,
            remote.tournamentDescription,
            remote.tournamentMode,
            remote.adminId
        )
}