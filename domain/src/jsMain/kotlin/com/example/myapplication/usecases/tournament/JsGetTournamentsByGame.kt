package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetTournamentsByGame(
    override val usecase: GetTournamentsByGameUseCase
): JsUseCaseWithParamsObservable<GetTournamentsByGameUseCase, GetTournamentsByGameUseCase.Params, TournamentEntity> {

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetTournamentsByGameUseCase.Params) =
        usecase.buildAction(params).toObservable()
}