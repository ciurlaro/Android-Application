package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParams
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi

class JsGetByModeUseCase(
    override val useCase: GetTournamentsByMode
) : JsUseCaseWithParams<GetTournamentsByMode, GetTournamentsByMode.Params, Pair<TournamentEntity, Int>> {

    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetTournamentsByMode.Params) =
        useCase.buildAction(params).toObservable()

}