package com.example.myapplication.mappers

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.rawresponses.*
import com.example.myapplication.utils.Quintuple

class RegistrationMapper(private val tournamentMapper: TournamentMapper, private val userMapper: UserMapper) :
    SingleFromRemoteMapper<Quintuple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON, UserJSON>, RegistrationEntity> {

    override fun fromRemoteSingle(remote: Quintuple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON, UserJSON>) =
        with(remote) {
            RegistrationEntity(
                userMapper.fromRemoteSingle(fifth),
                tournamentMapper.fromRemoteSingle(Triple(third, fourth, fifth)),
                first.outcome
            )
        }
}
