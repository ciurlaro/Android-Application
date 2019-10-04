package com.example.myapplication.rawresponses

data class MultipleRegistrationsJSON(
    val _embedded: MultipleEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

data class MultipleEmbeddedJSON(
    val registrationEntities: List<RegistrationJSON>
)

data class RegistrationJSON(
    val id: Long,
    val userId: String,
    val outcome: String,
    val _links: LinksJSON
)