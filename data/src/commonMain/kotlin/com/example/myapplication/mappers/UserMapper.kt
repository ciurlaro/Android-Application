package com.example.myapplication.mappers

import com.example.myapplication.entities.UserEntity
import com.example.myapplication.rawresponses.UserJSON
import com.example.myapplication.rawresponses.createresponces.CreateUserJSON

class UserMapper :
    SingleFromRemoteMapper<UserJSON, UserEntity>,
    SingleToRemoteMapper<CreateUserJSON, UserEntity> {

    override fun fromRemoteSingle(remote: UserJSON) = with(remote) {
        UserEntity(id, email, nickname, image, verified, subscriber)
    }


    //TODO: remove hardcoded password
    override fun toRemoteSingle(entity: UserEntity): CreateUserJSON =
        with(entity) {
            CreateUserJSON(email, "hardcoded password, fix this", nickname, image)
        }
}
