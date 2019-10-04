package com.example.myapplication.mappers

import com.example.myapplication.data.RegistrationEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MatchJSON
import com.example.myapplication.rawresponses.RegistrationJSON
import com.example.myapplication.rawresponses.TournamentJSON
import com.example.myapplication.utils.Quadruple

class RegistrationMapper :
    SingleFromRemoteMapper<Quadruple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON>, RegistrationEntity> {
    override fun fromRemoteSingle(remote: Quadruple<RegistrationJSON, MatchJSON, TournamentJSON, GameJSON>): RegistrationEntity {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}
