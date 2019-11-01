package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetAllMatchesByUser (
    override val usecase: GetAllMatchesByUserUseCase
) : JsUseCaseWithParamsObservable<GetAllMatchesByUserUseCase, GetAllMatchesByUserUseCase.Params, MatchEntity> {

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetAllMatchesByUserUseCase.Params) =
        usecase.buildAction(params).toObservable()
}