package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsCreateGame(
    override val usecase: CreateGameUseCase
) : JsUseCaseWithParamsPromise<CreateGameUseCase, CreateGameUseCase.Params, GameEntity> {

    override fun buildAction(params: CreateGameUseCase.Params) = GlobalScope.promise {
        usecase.buildAction(params)
    }
}