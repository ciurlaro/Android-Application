package com.example.myapplication.usecases.match

import com.example.myapplication.entities.MatchEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetMatchesByTournament (
    override val usecase: GetMatchesByTournamentUseCase
) : JsUseCaseWithParamsObservable<GetMatchesByTournamentUseCase, GetMatchesByTournamentUseCase.Params, MatchEntity> {

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetMatchesByTournamentUseCase.Params) =
        usecase.buildAction(params).toObservable()
}