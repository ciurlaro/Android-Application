package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi

class JsGetAllAvailableMatches (
    override val usecase: GetAllAvailableMatchesUseCase
) : JsUseCaseWithParamsObservable<GetAllAvailableMatchesUseCase, GetAllAvailableMatchesUseCase.Params, Pair<MatchEntity, Int>> {
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetAllAvailableMatchesUseCase.Params) =
        usecase.buildAction(params).toObservable()
}