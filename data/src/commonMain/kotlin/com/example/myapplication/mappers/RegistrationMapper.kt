package com.example.myapplication.mappers

import com.example.myapplication.data.RegistrationEntity
import com.example.myapplication.rawresponses.*
import com.example.myapplication.utils.Quintuple

class RegistrationMapper(val matchMapper: MatchMapper, val userMapper: UserMapper) :
    SingleFromRemoteMapper<Quintuple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON, UserJSON>, RegistrationEntity> {

    override fun fromRemoteSingle(remote: Quintuple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON, UserJSON>) =
        with(remote) {
            RegistrationEntity(
                userMapper.fromRemoteSingle(fifth),
                matchMapper.fromRemoteSingle(Triple(second, third, fourth)),
                first.outcome
            )
        }
}
