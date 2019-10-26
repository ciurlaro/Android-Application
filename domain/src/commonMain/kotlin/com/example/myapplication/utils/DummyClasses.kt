package com.example.myapplication.utils

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.entities.UserEntity
import com.soywiz.klock.DateTimeTz


class DummyClasses {
    companion object {
        val user = UserEntity("User", "user@user.user", "nickname", "image", true, true)
        val game = GameEntity("COD", listOf("Free4All"), "image", "icon")

        val tournament =
            TournamentEntity(
                42, 42, "42", "42",
                "42", user, game
            )

        val match =
            MatchEntity(42, DateTimeTz.nowLocal(), 42, true, tournament)
    }
}
