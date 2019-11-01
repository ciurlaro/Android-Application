package com.example.myapplication.modules

import com.example.myapplication.usecases.mode.JsCreateGameMode
import com.example.myapplication.usecases.tournament.JsGetTournamentsByMode
import com.example.myapplication.usecases.user.JsGetAccountVerificationStatus
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object JsUseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<JsGetTournamentsByMode>() with singleton { JsGetTournamentsByMode(instance()) }
        bind<JsCreateGameMode>() with singleton { JsCreateGameMode(instance()) }
        bind<JsGetAccountVerificationStatus>() with singleton { JsGetAccountVerificationStatus(instance()) }
    }
}