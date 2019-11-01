package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi

class JsGetTournamentsByMode(
    override val usecase: GetTournamentsByModeUseCase
) : JsUseCaseWithParamsObservable<GetTournamentsByModeUseCase, GetTournamentsByModeUseCase.Params, Pair<TournamentEntity, Int>> {

    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetTournamentsByModeUseCase.Params) =
        usecase.buildAction(params).toObservable()
}