package com.example.myapplication.mappers

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.rawresponses.*
import com.example.myapplication.utils.Quadruple
import com.example.myapplication.utils.Quintuple

class RegistrationMapper(private val matchMapper: MatchMapper, private val userMapper: UserMapper) :
    SingleFromRemoteMapper<Quintuple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON, UserJSON>, RegistrationEntity> {

    override fun fromRemoteSingle(remote: Quintuple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON, UserJSON>) =
        with(remote) {
            RegistrationEntity(
                userMapper.fromRemoteSingle(fifth),
                matchMapper.fromRemoteSingle(Quadruple(second, third, fourth, fifth)),
                first.outcome
            )
        }
}
