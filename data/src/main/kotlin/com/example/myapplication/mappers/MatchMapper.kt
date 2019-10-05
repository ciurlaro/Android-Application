package com.example.myapplication.mappers

import com.example.myapplication.data.MatchEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MatchJSON
import com.example.myapplication.rawresponses.TournamentJSON

class MatchMapper(
    private val tournamentMapper: TournamentMapper,
    private val dtMapper: DateTimeMapper
) : SingleFromRemoteMapper<Triple<MatchJSON, TournamentJSON, GameJSON>, MatchEntity> {

    override fun fromRemoteSingle(remote: Triple<MatchJSON, TournamentJSON, GameJSON>) =
        with(remote) {
            MatchEntity(
                first.id,
                dtMapper.fromRemoteSingle(first.matchDateTime),
                tournamentMapper.fromRemoteSingle(second to third)
            )
        }

}