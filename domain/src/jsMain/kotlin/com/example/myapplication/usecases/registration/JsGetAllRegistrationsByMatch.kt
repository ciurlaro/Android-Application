package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.externals.Observable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

class JsGetAllRegistrationsByMatch(
    override val usecase: GetAllRegistrationsByMatchUseCase
) : JsUseCaseWithParamsObservable<GetAllRegistrationsByMatchUseCase, GetAllRegistrationsByMatchUseCase.Params, RegistrationEntity> {

    @FlowPreview
    @ExperimentalCoroutinesApi
    override fun buildAction(params: GetAllRegistrationsByMatchUseCase.Params) =
        usecase.buildAction(params).toObservable()
}