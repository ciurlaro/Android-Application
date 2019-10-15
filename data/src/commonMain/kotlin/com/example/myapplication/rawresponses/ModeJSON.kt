package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class MultipleModesJSON(
    val _embedded: ModeEmbeddedJSON,
    val _links: LinksJSON
)

@Serializable
data class ModeEmbeddedJSON(
    val modeEntities: List<ModeJSON>
)

@Serializable
data class ModeJSON(
    val modeName: String,
    val _links: LinksJSON
)
