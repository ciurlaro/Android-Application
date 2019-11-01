package com.example.myapplication.usecases.registration

import com.example.myapplication.entities.RegistrationEntity
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.JsUseCaseWithParamsPromise
import com.example.myapplication.usecases.user.CreateUserUseCase
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.js.Promise

class JsCreateRegistration (
    override val usecase: CreateRegistrationUseCase
): JsUseCaseWithParamsPromise<CreateRegistrationUseCase, CreateRegistrationUseCase.Params, RegistrationEntity> {

    override fun buildAction(params: CreateRegistrationUseCase.Params): Promise<RegistrationEntity>  = GlobalScope.promise {
        usecase.buildAction(params)
    }
}