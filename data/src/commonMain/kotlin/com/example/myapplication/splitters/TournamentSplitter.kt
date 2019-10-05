package com.example.myapplication.splitters

import com.example.myapplication.mappers.Splitter
import com.example.myapplication.rawresponses.MultipleTournamentsJSON
import com.example.myapplication.rawresponses.TournamentJSON

class TournamentSplitter : Splitter<MultipleTournamentsJSON, TournamentJSON> {
    override fun split(input: MultipleTournamentsJSON) =
        input._embedded.tournamentEntities
}