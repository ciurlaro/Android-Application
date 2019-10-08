package com.example.myapplication.rawresponses

import kotlinx.serialization.Serializable

@Serializable
data class MultipleUsersJSON(
    val _embedded: UserEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

@Serializable
data class UserEmbeddedJSON(
    val userEntities: List<UserJSON>
)

@Serializable
data class UserJSON(
    val id: String,
    val email: String,
    val nickname: String,
    val image: String? = null,
    val subscriber: Boolean,
    val _links: LinksJSON
)
