@file:Suppress("unused")

package com.example.myapplication

import android.app.Application
import com.example.myapplication.BuildConfig.*
import com.example.myapplication.modules.ViewModelModule
import com.example.myapplication.modules.buildCommonKodein
import com.example.myapplication.modules.import
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.launch
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.androidXModule
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

open class Application : Application(), KodeinAware {

    @ExperimentalCoroutinesApi
    override val kodein = Kodein.lazy {
        import(androidXModule(this@Application))
        import(ViewModelModule)
        import(buildCommonKodein(SERVER_PROTOCOL, SERVER_URL, SERVER_PORT))
        bind<FirebaseAuthenticationManager>() with singleton { FirebaseAuthenticationManager(instance("login_channel")) }
        bind<Flow<Boolean>>("login_fLow") with singleton {
            val fAuth = instance<FirebaseAuth>()
            flow {
                fAuth.addAuthStateListener {
                    GlobalScope.launch { emit(it.currentUser != null) }
                }
            }
        }
        bind<FirebaseAuth>() with singleton { FirebaseAuth.getInstance() }
    }

}