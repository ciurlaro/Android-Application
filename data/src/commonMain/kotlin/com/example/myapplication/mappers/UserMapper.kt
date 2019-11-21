package com.example.myapplication.mappers

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.rawresponses.UserJSON

class UserMapper :
    SingleFromRemoteMapper<UserJSON, UserEntity> {

    override fun fromRemoteSingle(remote: UserJSON) =
        with(remote) {
            UserEntity(id, email, nickname, image, subscriber)
        }

}

