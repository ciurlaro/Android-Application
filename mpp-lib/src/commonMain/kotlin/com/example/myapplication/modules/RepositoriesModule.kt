package com.example.myapplication.modules

import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.repositories.ArenaTournamentRepositoryImplementation
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object RepositoriesModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<ArenaTournamentRepository>() with singleton {
            ArenaTournamentRepositoryImplementation(
                instance(), instance(), instance(), instance(), instance(),
                instance(), instance(), instance(), instance(), instance(),
                instance(), instance(), instance(), instance(), instance(),
                instance(), instance()
            )
        }
    }

}