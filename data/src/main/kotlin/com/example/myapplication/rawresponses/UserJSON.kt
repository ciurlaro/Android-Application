package com.example.myapplication.rawresponses

data class MultipleUsersJSON(
    val _embedded: UserEmbeddedJSON,
    val _links: LinksJSON,
    val page: PageJSON
)

data class UserEmbeddedJSON(
    val userEntities: List<UserJSON>
)

data class UserJSON(
    val id: String
)
