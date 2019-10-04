package com.example.myapplication.rawresponses

data class MultipleMatchJSON(
    val _embedded: MatchEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

data class MatchEmbeddedJSON(
    val matchEntities: List<MatchJSON>
)

data class MatchJSON(
    val id: Long,
    val matchDateTime: String,
    val _links: LinksJSON
)