package com.example.myapplication.modules

import com.example.myapplication.mappers.TournamentMapper
import org.kodein.di.Kodein
import org.kodein.di.generic.bind
import org.kodein.di.generic.instance
import org.kodein.di.generic.singleton

object MappersModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<TournamentMapper>() with singleton { TournamentMapper(instance()) }
        bind<TournamentMapper>() with singleton { TournamentMapper() }
    }

}