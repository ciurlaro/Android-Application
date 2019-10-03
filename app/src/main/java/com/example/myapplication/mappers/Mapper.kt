package com.example.myapplication.mappers

interface BaseMapper<Remote, Entity> {
    fun fromRemote(remote: Remote): Entity
}

interface TwoWayMapper<Remote, Entity> : BaseMapper<Remote, Entity> {
    fun toRemote(entity: Entity): Remote
}