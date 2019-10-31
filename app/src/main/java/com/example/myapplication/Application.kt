@file:Suppress("unused")

package com.example.myapplication

import android.app.Application
import com.example.myapplication.BuildConfig.*
import com.example.myapplication.modules.ViewModelModule
import com.example.myapplication.modules.buildCommonKodein
import com.example.myapplication.modules.import
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.androidXModule

open class Application : Application(), KodeinAware {

    override val kodein = Kodein.lazy {
        import(androidXModule(this@Application))
        import(ViewModelModule)
        import(buildCommonKodein(SERVER_PROTOCOL, SERVER_URL, SERVER_PORT))
    }

}