package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi

class JsGetShowcaseTournaments (
    override val usecase: GetShowCaseTournamentsUseCase
): JsUseCaseWithParamsObservable<GetShowCaseTournamentsUseCase, GetShowCaseTournamentsUseCase.Params, TournamentEntity> {

    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetShowCaseTournamentsUseCase.Params) =
        usecase.buildAction(params).toObservable()
}