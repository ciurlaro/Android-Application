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
    val id: String,
    val email: String,
    val nickname: String,
    val image: String? = null,
    val isSubscriber: Boolean,
    val _links: LinksJSON
)
