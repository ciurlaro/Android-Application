package com.example.myapplication.modules

import com.example.myapplication.auth.FirebaseAuth
import com.example.myapplication.auth.FirebaseAuthDatasourceImplementation
import com.example.myapplication.auth.getFirebaseAuthInstance
import com.example.myapplication.datasource.FirebaseAuthDatasource
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object AuthModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<FirebaseAuth>() with singleton { getFirebaseAuthInstance() }
        bind<FirebaseAuthDatasource>() with singleton { FirebaseAuthDatasourceImplementation(instance()) }
    }
}