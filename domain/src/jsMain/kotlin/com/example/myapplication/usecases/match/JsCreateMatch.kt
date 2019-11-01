package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsCreateMatch(
    override val usecase: CreateMatchUseCase
): JsUseCaseWithParamsPromise<CreateMatchUseCase, CreateMatchUseCase.Params, MatchEntity> {
    override fun buildAction(params: CreateMatchUseCase.Params) = GlobalScope.promise {
        usecase.buildAction(params)
    }

}