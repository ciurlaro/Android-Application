package com.example.myapplication.mappers

import com.example.myapplication.data.UserEntity
import com.example.myapplication.rawresponses.UserJSON

class UserMapper : SingleFromRemoteMapper<UserJSON, UserEntity> {
    override fun fromRemoteSingle(remote: UserJSON): UserEntity {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}
