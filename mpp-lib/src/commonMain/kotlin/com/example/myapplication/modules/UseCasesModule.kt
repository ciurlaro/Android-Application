package com.example.myapplication.modules

import com.example.myapplication.usecases.GetAllAvailableMatchesUseCase
import com.example.myapplication.usecases.GetAllMatchesByUserUseCase
import com.example.myapplication.usecases.GetAllRegistrationsByMatch
import com.example.myapplication.usecases.GetAvailableMatchesPerPage
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object UseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<GetAllRegistrationsByMatch>() with singleton { GetAllRegistrationsByMatch(instance()) }
        bind<GetAvailableMatchesPerPage>() with singleton { GetAvailableMatchesPerPage(instance()) }
        bind<GetAllAvailableMatchesUseCase>() with singleton {
            GetAllAvailableMatchesUseCase(
                instance(),
                instance()
            )
        }
        bind<GetAllMatchesByUserUseCase>() with singleton { GetAllMatchesByUserUseCase(instance()) }
    }
}