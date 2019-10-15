package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class LinksJSON(
    val self: HrefJSON,
    val tournamentEntity: HrefJSON? = null,
    val gameEntity: HrefJSON? = null,
    val modeEntity: HrefJSON? = null,
    val matchEntity: HrefJSON? = null,
    val registrationEntity: HrefJSON? = null,
    val userEntity: HrefJSON? = null,
    val profile: HrefJSON? = null,
    val search: HrefJSON? = null,
    val tournament: HrefJSON? = null,
    val game: HrefJSON? = null,
    val mode: HrefJSON? = null,
    val match: HrefJSON? = null,
    val registration: HrefJSON? = null,
    val user: HrefJSON? = null,
    val admin: HrefJSON? = null
)