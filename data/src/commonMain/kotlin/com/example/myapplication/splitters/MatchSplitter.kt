package com.example.myapplication.splitters

import com.example.myapplication.mappers.Splitter
import com.example.myapplication.rawresponses.MatchJSON
import com.example.myapplication.rawresponses.MultipleMatchJSON

class MatchSplitter : Splitter<MultipleMatchJSON, MatchJSON> {

    override fun split(input: MultipleMatchJSON) =
        input._embedded.matchEntities

}