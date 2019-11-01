package com.example.myapplication.usecases.game

import com.example.myapplication.entities.GameEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi

class JsGetGamesContainingName(
    override val usecase: GetGamesContainingNameUseCase
) : JsUseCaseWithParamsObservable<GetGamesContainingNameUseCase, GetGamesContainingNameUseCase.Params, GameEntity> {

    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetGamesContainingNameUseCase.Params) =
        usecase.buildAction(params).toObservable()
}