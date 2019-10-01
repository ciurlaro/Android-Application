@file:Suppress("unused")

package com.example.myapplication

import android.app.Application
import com.example.myapplication.modules.NetworkModule
import com.example.myapplication.modules.ViewModelModule
import com.example.myapplication.modules.import
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.androidXModule

class Application : Application(), KodeinAware {

    override val kodein by Kodein.lazy {
        import(androidXModule(this@Application))
        import(NetworkModule)
        import(ViewModelModule)
    }

}