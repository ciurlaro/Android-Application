@file:Suppress("unused")

package com.example.myapplication

import com.example.myapplication.datasource.TokenFactory
import com.example.myapplication.modules.MockModule
import com.example.myapplication.modules.import
import org.kodein.di.Copy
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.singleton

class MockApplication : Application() {

    override val kodein by Kodein.lazy {
        extend(super.kodein, copy = Copy.All)
        import(MockModule, true)
        bind<TokenFactory>() with singleton { MockTokenFactory() }
    }

}