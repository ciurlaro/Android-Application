package com.example.myapplication.modules

import com.example.myapplication.auth.AuthenticationManager
import com.example.myapplication.auth.FirebaseAuthenticationManager
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.ExperimentalCoroutinesApi
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

@ExperimentalCoroutinesApi
actual object AuthModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<FirebaseAuth>() with singleton { FirebaseAuth.getInstance() }
        bind<AuthenticationManager>() with singleton {
            FirebaseAuthenticationManager(instance())
        }
    }
}