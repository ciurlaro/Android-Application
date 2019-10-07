@file:Suppress("unused")

package com.example.myapplication

import android.app.Application
import com.example.myapplication.modules.COMMON_KODEIN
import com.example.myapplication.modules.ViewModelModule
import com.example.myapplication.modules.import
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.androidXModule

open class Application : Application(), KodeinAware {

    override val kodein = Kodein.lazy {
        extend(COMMON_KODEIN)
        import(androidXModule(this@Application))
        import(ViewModelModule)
    }

}