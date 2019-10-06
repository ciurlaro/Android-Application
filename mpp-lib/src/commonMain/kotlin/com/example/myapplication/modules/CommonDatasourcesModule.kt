package com.example.myapplication.modules

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.datasource.ArenaTournamentDatasourceImplementation
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object CommonDatasourcesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<ArenaTournamentDatasource>() with singleton {
            ArenaTournamentDatasourceImplementation(
                instance(),
                instance(),
                instance()
            )
        }
    }
}