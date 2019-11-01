package com.example.myapplication.usecases.tournament

import com.example.myapplication.entities.TournamentEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetCreatedTournamentsByAdmin (
    override val usecase: GetCreatedTournamentsByAdminUseCase
) : JsUseCaseWithParamsObservable<GetCreatedTournamentsByAdminUseCase, GetCreatedTournamentsByAdminUseCase.Params, TournamentEntity> {

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetCreatedTournamentsByAdminUseCase.Params) =
        usecase.buildAction(params).toObservable()
}