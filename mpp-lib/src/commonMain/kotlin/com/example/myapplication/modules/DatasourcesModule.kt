package com.example.myapplication.modules

import com.example.myapplication.datasource.*
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object DatasourcesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<ArenaTournamentDatasource>() with singleton {
            ArenaTournamentDatasourceImplementation(instance(), instance(), instance())
        }

        bind<FirebaseStorageDatasource>() with singleton { FirebaseStorageDatasourceImplementation(instance()) }

        bind<FirebaseAuth>() with singleton { getFirebaseAuthInstance() }
        bind<FirebaseStorage>() with singleton { getFirebaseStorageInstance() }

        bind<FirebaseAuthDatasource>() with singleton { FirebaseAuthDatasourceImplementation(instance()) }


        bind<ArenaTournamentDatasource.Endpoints>() with singleton {
            EndpointsImplementation(
                instance("serverProtocol"),
                instance("serverUrl"),
                instance("serverPort"),
                instance()
            )
        }
    }
}