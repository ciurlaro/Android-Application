package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

class JsCreateTournament (
    override val usecase: CreateTournamentUseCase
) : JsUseCaseWithParamsPromise<CreateTournamentUseCase, CreateTournamentUseCase.Params, TournamentEntity> {

    @ExperimentalCoroutinesApi
    override fun buildAction(params: CreateTournamentUseCase.Params) = GlobalScope.promise {
        usecase.buildAction(params)
    }
}