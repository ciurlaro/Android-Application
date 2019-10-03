package com.example.myapplication.mappers

import com.example.myapplication.data.TournamentEntity
import com.example.myapplication.rawresponses.MultipleTournamentsJSON

class MultipleTournamentsMapper(private val baseMapper: TournamentMapper) :
    BaseMapper<MultipleTournamentsJSON, List<TournamentEntity>> {

    override fun fromRemote(remote: MultipleTournamentsJSON) = with(remote) {
        _embedded.tournamentEntities.map { baseMapper.fromRemote(it) }
    }

}