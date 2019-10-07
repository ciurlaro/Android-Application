@file:Suppress("unused")

package com.example.myapplication

import com.example.myapplication.modules.MockModule
import com.example.myapplication.modules.import
import org.kodein.di.Kodein

class MockApplication : Application() {

    override val kodein by Kodein.lazy {
        extend(super.kodein)
        import(MockModule, true)
    }

}