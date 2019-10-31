package com.example.myapplication.modules

import com.example.myapplication.usecases.mode.JsCreateGameModeUseCase
import com.example.myapplication.usecases.tournament.JsGetByModeUseCase
import com.example.myapplication.usecases.user.JsGetAccountVerificationStatusUseCase
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object JsUseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<JsGetByModeUseCase>() with singleton { JsGetByModeUseCase(instance()) }
        bind<JsCreateGameModeUseCase>() with singleton { JsCreateGameModeUseCase(instance()) }
        bind<JsGetAccountVerificationStatusUseCase>() with singleton { JsGetAccountVerificationStatusUseCase(instance()) }
    }
}