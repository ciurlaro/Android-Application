package com.example.myapplication.modules

import com.example.myapplication.datasource.*
import com.github.lamba92.firebasemultiplatform.auth.FirebaseAuth
import com.github.lamba92.firebasemultiplatform.storage.FirebaseStorage
import io.ktor.util.InternalAPI
import kotlinx.serialization.UnstableDefault
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

@UnstableDefault
@InternalAPI
object DatasourcesModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<ArenaTournamentDatasource>() with singleton {
            ArenaTournamentDatasourceImplementation(instance(), instance(), instance())
        }

        bind<FirebaseStorageDatasource>() with singleton { FirebaseStorageDatasourceImplementation(instance()) }

        bind<FirebaseAuth>() with singleton { FirebaseAuth.default }

        bind<FirebaseStorage>() with singleton { FirebaseStorage.default }

        bind<FirebaseAuthDatasource>() with singleton { FirebaseAuthDatasourceImplementation(instance()) }


        bind<ArenaTournamentDatasource.Endpoints>() with singleton {
            EndpointsImplementation(
                instance("serverProtocol"),
                instance("serverUrl"),
                instance("serverPort")
            )
        }
    }
}