package com.example.myapplication.mappers

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MatchJSON
import com.example.myapplication.rawresponses.TournamentJSON
import com.example.myapplication.rawresponses.UserJSON
import com.example.myapplication.utils.Quadruple

class MatchMapper(
    private val tournamentMapper: TournamentMapper,
    private val dtMapper: DateTimeMapper
) : SingleFromRemoteMapper<Quadruple<MatchJSON, TournamentJSON, GameJSON, UserJSON>, MatchEntity> {

    override fun fromRemoteSingle(remote: Quadruple<MatchJSON, TournamentJSON, GameJSON, UserJSON>) =
        with(remote) {
            MatchEntity(
                first.id,
                dtMapper.fromRemoteSingle(first.matchDateTime),
                first.playersCount,
                first.registrationPossible,
                tournamentMapper.fromRemoteSingle(Triple(second, third, fourth))
            )
        }

}