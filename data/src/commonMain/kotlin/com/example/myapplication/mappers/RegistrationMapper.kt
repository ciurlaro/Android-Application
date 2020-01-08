package com.example.myapplication.mappers

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.RegistrationJSON
import com.example.myapplication.rawresponses.TournamentJSON
import com.example.myapplication.rawresponses.UserJSON
import com.example.myapplication.utils.Quadruple

class RegistrationMapper(private val tournamentMapper: TournamentMapper, private val userMapper: UserMapper) :
    SingleFromRemoteMapper<Quadruple<RegistrationJSON, TournamentJSON, GameJSON, UserJSON>, RegistrationEntity> {

    override fun fromRemoteSingle(remote: Quadruple<RegistrationJSON, TournamentJSON, GameJSON, UserJSON>) =
        with(remote) {
            RegistrationEntity(
                userMapper.fromRemoteSingle(fourth),
                tournamentMapper.fromRemoteSingle(Triple(second, third, fourth)),
                first.outcome
            )
        }
}
