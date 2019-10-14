package com.example.myapplication.splitters

import com.example.myapplication.rawresponses.GameJSON
import com.example.myapplication.rawresponses.MultipleGamesJSON

class GameSplitter : Splitter<MultipleGamesJSON, GameJSON> {

    override fun split(input: MultipleGamesJSON) =
        input._embedded.gameEntities

}