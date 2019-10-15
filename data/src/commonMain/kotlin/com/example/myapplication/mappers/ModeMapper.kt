package com.example.myapplication.mappers

import com.example.myapplication.entities.ModeEntity
import com.example.myapplication.rawresponses.ModeJSON

class ModeMapper : SingleFromRemoteMapper<ModeJSON, ModeEntity> {

    override fun fromRemoteSingle(remote: ModeJSON) =
        with(remote) {
            ModeEntity(modeName)
        }

}
