package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetRegistrationsByTournament(
    override val usecase: GetRegistrationsByTournamentUseCase
) : JsUseCaseWithParamsObservable<GetRegistrationsByTournamentUseCase, GetRegistrationsByTournamentUseCase.Params, RegistrationEntity> {

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetRegistrationsByTournamentUseCase.Params) =
        usecase.buildAction(params).toObservable()

}