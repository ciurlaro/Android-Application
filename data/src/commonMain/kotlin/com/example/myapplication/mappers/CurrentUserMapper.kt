package com.example.myapplication.mappers

import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.entities.UserEntity

class CurrentUserMapper :
    SingleFromRemoteMapper<CurrentUserMapper.Params, UserEntity> {

    override fun fromRemoteSingle(remote: Params) = with(remote) {
        UserEntity(
            user.id,
            user.email,
            user.nickname,
            imageUrl,
            claims.getValue("isSubscriber")
        )
    }

    fun fromRemoteSingle(user: AuthUserEntity, claims: Map<String, Boolean>, imageUrl: String?) =
        fromRemoteSingle(Params(user, claims, imageUrl))

    data class Params(val user: AuthUserEntity, val claims: Map<String, Boolean>, val imageUrl: String?)

}