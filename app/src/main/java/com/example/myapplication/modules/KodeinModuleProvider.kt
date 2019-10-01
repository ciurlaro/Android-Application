package com.example.myapplication.modules

import org.kodein.di.Kodein

interface KodeinModuleProvider {
    fun provideModule(): Kodein.Builder.() -> Unit
}

fun KodeinModuleProvider.getModule() =
    Kodein.Module(name = this::class.simpleName!!, init = provideModule())

fun Kodein.MainBuilder.import(moduleProvider: KodeinModuleProvider) =
    import(moduleProvider.getModule())
