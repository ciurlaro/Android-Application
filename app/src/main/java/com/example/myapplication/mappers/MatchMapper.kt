package com.example.myapplication.mappers

import com.example.myapplication.data.MatchEntity
import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MatchJSON
import com.example.myapplication.rawresponses.TournamentJSON

class MatchMapper :
    SingleFromRemoteMapper<Triple<MatchJSON, TournamentJSON, GameJSON>, MatchEntity> {

    override fun fromRemoteSingle(remote: Triple<MatchJSON, TournamentJSON, GameJSON>): MatchEntity {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}