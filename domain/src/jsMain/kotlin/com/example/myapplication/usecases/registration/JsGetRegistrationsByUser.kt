package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsObservable
import com.example.myapplication.usecases.externals.Observable
import com.example.myapplication.usecases.toObservable
import kotlinx.coroutines.FlowPreview

class JsGetRegistrationsByUser(
    override val usecase: GetRegistrationsByUserUseCase
) : JsUseCaseWithParamsObservable<GetRegistrationsByUserUseCase, GetRegistrationsByUserUseCase.Params, RegistrationEntity> {

    @FlowPreview
    override fun buildAction(params: GetRegistrationsByUserUseCase.Params) =
        usecase.buildAction(params).toObservable()

}