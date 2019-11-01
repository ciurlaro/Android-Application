package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.InternalCoroutinesApi


class JsGetGamesByMode(
    override val usecase: GetGamesByModeUseCase
) : JsUseCaseWithParamsObservable<GetGamesByModeUseCase, GetGamesByModeUseCase.Params, GameEntity> {

    @InternalCoroutinesApi
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetGamesByModeUseCase.Params) =
        usecase.buildAction(params).toObservable()

}