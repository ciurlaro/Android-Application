package com.example.myapplication.modules

import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.datasource.ArenaTournamentDatasourceImplementation
import com.example.myapplication.datasource.EndpointsImplementation
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object DatasourcesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<ArenaTournamentDatasource>() with singleton {
            ArenaTournamentDatasourceImplementation(instance(), instance(), instance())
        }
        bind<ArenaTournamentDatasource.Endpoints>() with singleton {
            EndpointsImplementation(
                instance("serverProtocol"),
                instance("serverHost"),
                instance("serverPort"),
                instance()
            )
        }
    }
}