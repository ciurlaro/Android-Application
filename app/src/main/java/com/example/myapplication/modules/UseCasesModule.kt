package com.example.myapplication.modules

import com.example.myapplication.usecases.GetAllTournamentsUseCase
import org.kodein.di.Kodein
import org.kodein.di.generic.bind
import org.kodein.di.generic.instance
import org.kodein.di.generic.singleton

object UseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<GetAllTournamentsUseCase>() with singleton {
            GetAllTournamentsUseCase(
                instance(),
                instance()
            )
        }
    }
}