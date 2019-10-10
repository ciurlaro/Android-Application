package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class MultipleMatchJSON(
    val _embedded: MatchEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

@Serializable
data class MatchEmbeddedJSON(
    val matchEntities: List<MatchJSON>
)

@Serializable
data class MatchJSON(
    val id: Long,
    val matchDateTime: String,
    val playersCount: Int,
    val registrationPossible: Boolean,
    val _links: LinksJSON
)