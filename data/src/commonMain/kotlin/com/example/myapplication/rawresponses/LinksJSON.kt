package com.example.myapplication.rawresponses

data class LinksJSON(
    val self: HrefJSON,
    val tournamentEntity: HrefJSON? = null,
    val gameEntity: HrefJSON? = null,
    val matchEntity: HrefJSON? = null,
    val registrationEntity: HrefJSON? = null,
    val userEntity: HrefJSON? = null,
    val tournamentInvolved: HrefJSON? = null,
    val matchId: HrefJSON? = null,
    val profile: HrefJSON? = null,
    val search: HrefJSON? = null
)