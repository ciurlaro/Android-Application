package com.example.myapplication.modules

import com.example.myapplication.mappers.TournamentMapper
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton


object MappersModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<TournamentMapper>() with singleton { TournamentMapper(instance()) }
    }

}