package com.example.myapplication.usecases.mode

import com.example.myapplication.entities.ModeEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsCreateGameModeUseCase(
    override val useCase: CreateGameModeUseCase
) : JsUseCaseWithParamsPromise<CreateGameModeUseCase, CreateGameModeUseCase.Params, ModeEntity> {
    override fun buildAction(params: CreateGameModeUseCase.Params) = GlobalScope.promise {
        useCase.buildAction(params)
    }
}