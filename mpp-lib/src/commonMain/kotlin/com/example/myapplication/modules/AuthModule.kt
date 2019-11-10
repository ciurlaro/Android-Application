package com.example.myapplication.modules

import com.example.myapplication.auth.AuthenticationManager
import com.example.myapplication.auth.FirebaseAuth
import com.example.myapplication.auth.FirebaseAuthenticationManager
import com.example.myapplication.auth.getFirebaseAuthInstance
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object AuthModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<FirebaseAuth>() with singleton { getFirebaseAuthInstance() }
        bind<AuthenticationManager>() with singleton { FirebaseAuthenticationManager(instance()) }
    }
}