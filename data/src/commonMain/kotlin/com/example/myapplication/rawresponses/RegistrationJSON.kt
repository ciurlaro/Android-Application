package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class MultipleRegistrationsJSON(
    val _embedded: MultipleEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

@Serializable
data class MultipleEmbeddedJSON(
    val registrationEntities: List<RegistrationJSON>
)

@Serializable
data class RegistrationJSON(
    val id: Long,
    // val userId: String,
    val outcome: String,
    val _links: LinksJSON
)