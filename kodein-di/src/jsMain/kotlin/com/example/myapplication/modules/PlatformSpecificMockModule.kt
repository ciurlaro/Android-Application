package com.example.myapplication.modules

import org.kodein.di.Kodein

actual object PlatformSpecificMockModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        // TODO
    }
}